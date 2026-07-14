// Iframe content script for EUROPATHEK PDF Exporter
// This script runs inside the book reader iframe and directly fetches page images

(function() {
  'use strict';

  console.log('[EUROPATHEK-IFRAME] Script loading on:', window.location.href);

  let isRunning = false;
  let shouldStop = false;
  let config = null;

  // Notify that iframe script is ready
  chrome.runtime.sendMessage({ type: 'IFRAME_READY' });

  // Listen for messages via chrome.runtime
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('[EUROPATHEK-IFRAME] Received message:', message.type);

    if (message.type === 'START_EXTRACTION') {
      if (!isRunning) {
        config = message.config;
        shouldStop = false;
        if (config.mode === 'screenshot') {
          // Only the reader frame (a direct child of the top window) drives the
          // capture loop, so nested frames don't fire duplicate screenshots.
          if (window.parent === window.top) {
            console.log('[EUROPATHEK-IFRAME] Starting SCREENSHOT capture with config:', config);
            runScreenshotCapture();
          }
        } else {
          console.log('[EUROPATHEK-IFRAME] Starting extraction with config:', config);
          runExtraction();
        }
      }
      sendResponse({ success: true });
      return true;
    }

    if (message.type === 'STOP_EXTRACTION') {
      console.log('[EUROPATHEK-IFRAME] Stopping extraction');
      shouldStop = true;
      sendResponse({ success: true });
      return true;
    }

    // Advance the reader by one spread. Broadcast to every frame so the key
    // reaches whichever frame the zippo reader listens on.
    if (message.type === 'ADVANCE') {
      advancePage();
      sendResponse({ success: true });
      return true;
    }

    return true;
  });

  // Utility function to wait for a specified time
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get base URL for image fetching
  function getBaseUrl() {
    // The iframe URL is something like: https://www.europathek.de/dlm/bookId/...
    // Images are at: preview/big/{pageNum}.jpg relative to the book folder
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/');

    // Find the book path (everything up to but not including the last part like 'index.html' or 'print.html')
    let basePath = '';
    for (let i = 0; i < pathParts.length; i++) {
      if (pathParts[i] && !pathParts[i].includes('.html') && !pathParts[i].includes('.htm')) {
        basePath += '/' + pathParts[i];
      }
    }

    // If we're on a page like /dlm/1234/, the base is that folder
    // Ensure it ends with /
    if (!basePath.endsWith('/')) {
      basePath += '/';
    }

    console.log('[EUROPATHEK-IFRAME] Base path:', basePath);
    return url.origin + basePath;
  }

  // Fetch image and convert to base64
  async function fetchImageAsBase64(imageUrl) {
    console.log('[EUROPATHEK-IFRAME] Fetching image:', imageUrl);

    const response = await fetch(imageUrl, {
      credentials: 'include',
      mode: 'cors'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // Create PDF from image
  async function createPDFFromImage(imageDataUrl, pageNum) {
    sendProgress(`Creating PDF for page ${pageNum}...`);

    try {
      // Check if jsPDF is available
      if (typeof window.jspdf === 'undefined') {
        throw new Error('jsPDF not loaded');
      }

      // Create an image element to get dimensions
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageDataUrl;
      });

      // Create PDF using jsPDF
      const { jsPDF } = window.jspdf;

      // Determine orientation based on image aspect ratio
      const isLandscape = img.width > img.height;
      const pdf = new jsPDF({
        orientation: isLandscape ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // A4 dimensions in mm
      const pageWidth = isLandscape ? 297 : 210;
      const pageHeight = isLandscape ? 210 : 297;

      // Calculate dimensions to fit page while maintaining aspect ratio
      const imgRatio = img.width / img.height;
      const pageRatio = pageWidth / pageHeight;

      let imgWidth, imgHeight, offsetX = 0, offsetY = 0;

      if (imgRatio > pageRatio) {
        // Image is wider than page ratio - fit to width
        imgWidth = pageWidth;
        imgHeight = pageWidth / imgRatio;
        offsetY = (pageHeight - imgHeight) / 2;
      } else {
        // Image is taller than page ratio - fit to height
        imgHeight = pageHeight;
        imgWidth = pageHeight * imgRatio;
        offsetX = (pageWidth - imgWidth) / 2;
      }

      pdf.addImage(imageDataUrl, 'JPEG', offsetX, offsetY, imgWidth, imgHeight);

      // Get PDF as base64
      const pdfBase64 = pdf.output('datauristring').split(',')[1];
      const filename = `page-${String(pageNum).padStart(3, '0')}.pdf`;

      // Send to parent for download via chrome.runtime
      chrome.runtime.sendMessage({
        type: 'IFRAME_DOWNLOAD',
        data: pdfBase64,
        filename: filename
      });

      sendProgress(`Saved ${filename}`);
      return true;
    } catch (error) {
      console.error('[EUROPATHEK-IFRAME] Error creating PDF:', error);
      sendProgress(`Error: ${error.message}`);
      return false;
    }
  }

  // Send progress update
  function sendProgress(status, currentPage) {
    console.log('[EUROPATHEK-IFRAME] Progress:', status);
    chrome.runtime.sendMessage({
      type: 'IFRAME_PROGRESS',
      currentPage: currentPage || (config ? config.currentPage : 0),
      totalPages: config ? config.endPage : 0,
      status: status
    });
  }

  // Send error
  function sendError(error) {
    console.error('[EUROPATHEK-IFRAME] Error:', error);
    chrome.runtime.sendMessage({
      type: 'IFRAME_ERROR',
      error: error
    });
  }

  // Send completion
  function sendComplete() {
    console.log('[EUROPATHEK-IFRAME] Complete');
    chrome.runtime.sendMessage({
      type: 'IFRAME_COMPLETE'
    });
  }

  // Main extraction loop - directly fetches images
  async function runExtraction() {
    isRunning = true;
    let currentPage = config.startPage;
    const endPage = config.endPage;
    const baseUrl = getBaseUrl();

    console.log('[EUROPATHEK-IFRAME] Starting extraction from page', currentPage, 'to', endPage);
    console.log('[EUROPATHEK-IFRAME] Base URL:', baseUrl);

    try {
      while (currentPage <= endPage && !shouldStop) {
        config.currentPage = currentPage;
        sendProgress(`Processing page ${currentPage}/${endPage}`, currentPage);

        // Construct image URL - images are at preview/big/{pageNum}.jpg
        const imageUrl = `${baseUrl}preview/big/${currentPage}.jpg`;

        try {
          // Fetch the image
          const imageDataUrl = await fetchImageAsBase64(imageUrl);

          // Create PDF from image
          await createPDFFromImage(imageDataUrl, currentPage);

        } catch (fetchError) {
          console.error('[EUROPATHEK-IFRAME] Error fetching page', currentPage, ':', fetchError);
          sendProgress(`Error on page ${currentPage}: ${fetchError.message}`, currentPage);

          // Try alternative image path
          const altImageUrl = `${baseUrl}preview/${currentPage}.jpg`;
          console.log('[EUROPATHEK-IFRAME] Trying alternative URL:', altImageUrl);

          try {
            const imageDataUrl = await fetchImageAsBase64(altImageUrl);
            await createPDFFromImage(imageDataUrl, currentPage);
          } catch (altError) {
            console.error('[EUROPATHEK-IFRAME] Alternative also failed:', altError);
            // Continue to next page instead of stopping
          }
        }

        currentPage++;

        // Small delay between pages to avoid overwhelming the server
        await delay(config.delay || 500);
      }

      if (shouldStop) {
        sendProgress('Export stopped by user');
      } else {
        sendComplete();
      }
    } catch (error) {
      console.error('[EUROPATHEK-IFRAME] Extraction error:', error);
      sendError(error.message);
    } finally {
      isRunning = false;
      shouldStop = false;
    }
  }

  // ---- Screenshot mode --------------------------------------------------

  // Advance to the next spread. Primary mechanism is the Right-Arrow key
  // (works with most flipbook readers). If the reader needs a click instead,
  // set config.nextSelector to the next-button CSS selector.
  function advancePage() {
    const opts = { key: 'ArrowRight', code: 'ArrowRight', keyCode: 39, which: 39, bubbles: true, cancelable: true };
    // Dispatch ONCE on document. The event bubbles up to window, so it reaches
    // whichever of the two the reader listens on. Dispatching on several targets
    // (document + documentElement + body) makes the reader turn multiple pages.
    try {
      document.dispatchEvent(new KeyboardEvent('keydown', opts));
      document.dispatchEvent(new KeyboardEvent('keyup', opts));
    } catch (e) { /* ignore */ }
    try {
      if (config && config.nextSelector) {
        const el = document.querySelector(config.nextSelector);
        if (el) el.click();
      }
    } catch (e) { /* ignore */ }
  }

  // Reject a promise if it doesn't settle in time (guards against a hung
  // message when the background service worker was suspended).
  function withTimeout(promise, ms) {
    return Promise.race([
      promise,
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
    ]);
  }

  // Request one screenshot from the background worker, retrying transient
  // failures (worker asleep, window/tab briefly not focused, capture throttle).
  // Retrying also re-wakes a suspended worker. Only gives up after MAX tries.
  async function captureWithRetry(filename, n, endNum) {
    const MAX = 8;
    for (let attempt = 1; attempt <= MAX && !shouldStop; attempt++) {
      let resp;
      try {
        resp = await withTimeout(chrome.runtime.sendMessage({ type: 'CAPTURE_TAB', filename }), 15000);
      } catch (e) {
        resp = { success: false, error: (e && e.message) || String(e) };
      }
      if (resp && resp.success) return resp;
      const why = resp ? resp.error : 'no response';
      console.warn(`[EUROPATHEK-IFRAME] capture ${n} attempt ${attempt}/${MAX} failed: ${why}`);
      sendProgress(`Page ${n}/${endNum}: retry ${attempt}/${MAX} (${why})`, n);
      await delay(3000);
    }
    return { success: false, error: shouldStop ? 'stopped by user' : 'failed after retries' };
  }

  // Capture loop: ask the background worker to screenshot the visible tab and
  // save it, then advance and wait for the flip animation before the next shot.
  async function runScreenshotCapture() {
    isRunning = true;
    const startNum = parseInt(config.startPage, 10) || 1;
    const endNum = parseInt(config.endPage, 10) || startNum;

    try {
      // Let the current spread settle before the first shot.
      await delay(400);

      let count = 0;
      for (let n = startNum; n <= endNum && !shouldStop; n++) {
        const filename = `europathek-capture/capture-${String(n).padStart(3, '0')}.jpg`;
        sendProgress(`Capturing ${n}/${endNum}`, n);

        const resp = await captureWithRetry(filename, n, endNum);
        if (!resp.success) {
          sendError(`Stopped at page ${n} (${resp.error}). Last saved: page ${n - 1}. ` +
                    `To resume: set First file number = ${n}, navigate the reader to that spread, then Start.`);
          return;
        }
        count++;
        chrome.storage.local.set({ ssLastSaved: n, ssTotal: endNum });

        if (n < endNum && !shouldStop) {
          advancePage(); // runs in the reader frame directly — no cross-frame broadcast
          await delay(config.delay || 1500);
        }
      }

      if (shouldStop) {
        sendProgress(`Stopped after ${count} captures`);
      } else {
        sendComplete();
      }
    } catch (error) {
      sendError(error.message);
    } finally {
      isRunning = false;
      shouldStop = false;
    }
  }

  console.log('[EUROPATHEK-IFRAME] Script loaded successfully');
})();
