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
        console.log('[EUROPATHEK-IFRAME] Starting extraction with config:', config);
        runExtraction();
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

  console.log('[EUROPATHEK-IFRAME] Script loaded successfully');
})();
