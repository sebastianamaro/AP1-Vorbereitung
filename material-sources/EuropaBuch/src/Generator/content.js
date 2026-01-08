// Content script for main EUROPATHEK page
// Acts as a bridge between popup and iframe

(function() {
  'use strict';

  console.log('[EUROPATHEK] Content script loading on:', window.location.href);

  let currentState = {
    isRunning: false,
    currentPage: 0,
    config: null
  };

  // Listen for messages from popup AND iframe content script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('[EUROPATHEK] Content received message:', message.action || message.type);

    // Messages from popup
    if (message.action === 'START_EXPORT') {
      startExport(message.config);
      sendResponse({ success: true });
      return true;
    }

    if (message.action === 'STOP_EXPORT') {
      stopExport();
      sendResponse({ success: true });
      return true;
    }

    if (message.action === 'GET_STATUS') {
      sendResponse({
        isRunning: currentState.isRunning,
        currentPage: currentState.currentPage
      });
      return true;
    }

    // Messages from iframe (relayed to popup)
    if (message.type === 'IFRAME_PROGRESS') {
      currentState.currentPage = message.currentPage;
      chrome.runtime.sendMessage({
        action: 'PROGRESS_UPDATE',
        currentPage: message.currentPage,
        totalPages: message.totalPages,
        status: message.status
      });
      return true;
    }

    if (message.type === 'IFRAME_COMPLETE') {
      currentState.isRunning = false;
      chrome.runtime.sendMessage({ action: 'EXPORT_COMPLETE' });
      return true;
    }

    if (message.type === 'IFRAME_ERROR') {
      currentState.isRunning = false;
      chrome.runtime.sendMessage({
        action: 'EXPORT_ERROR',
        error: message.error
      });
      return true;
    }

    if (message.type === 'IFRAME_DOWNLOAD') {
      downloadPDF(message.data, message.filename);
      return true;
    }

    if (message.type === 'IFRAME_READY') {
      console.log('[EUROPATHEK] Iframe script is ready');
      // If we were waiting to start, send the config now
      if (currentState.isRunning && currentState.config) {
        chrome.runtime.sendMessage({
          type: 'START_EXTRACTION',
          config: currentState.config
        });
      }
      return true;
    }

    return true;
  });

  function startExport(config) {
    console.log('[EUROPATHEK] Starting export with config:', config);
    currentState.isRunning = true;
    currentState.config = config;
    currentState.currentPage = config.startPage;

    // Send start command via chrome.runtime (will be received by iframe content script)
    chrome.runtime.sendMessage({
      type: 'START_EXTRACTION',
      config: config
    });

    console.log('[EUROPATHEK] Sent START_EXTRACTION message');
  }

  function stopExport() {
    console.log('[EUROPATHEK] Stopping export');
    currentState.isRunning = false;

    chrome.runtime.sendMessage({
      type: 'STOP_EXTRACTION'
    });
  }

  function downloadPDF(base64Data, filename) {
    console.log('[EUROPATHEK] Downloading:', filename);
    try {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      console.log('[EUROPATHEK] Download triggered for:', filename);
    } catch (e) {
      console.error('[EUROPATHEK] Download error:', e);
    }
  }

  console.log('[EUROPATHEK] Content script loaded successfully');
})();
