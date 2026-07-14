// Background service worker for EUROPATHEK PDF Exporter
// Routes messages between popup, content scripts, and iframe content scripts

console.log('[EUROPATHEK-BG] Background service worker started');

// Relay messages to all tabs with europathek.de
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('[EUROPATHEK-BG] Received message:', message.type || message.action, 'from:', sender.tab ? sender.tab.url : 'popup');

  // Messages that need to be broadcast to content scripts
  if (message.type === 'START_EXTRACTION' || message.type === 'STOP_EXTRACTION') {
    // Send to all europathek tabs (including iframes)
    chrome.tabs.query({ url: '*://www.europathek.de/*' }, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, message, { frameId: undefined })
          .catch(err => console.log('[EUROPATHEK-BG] Could not send to tab:', tab.id));
      });
    });
    sendResponse({ success: true });
    return true;
  }

  // Screenshot mode: capture the visible tab as JPG and save it.
  if (message.type === 'CAPTURE_TAB') {
    const windowId = sender.tab ? sender.tab.windowId : undefined;
    try {
      chrome.tabs.captureVisibleTab(windowId, { format: 'jpeg', quality: 95 }, (dataUrl) => {
        if (chrome.runtime.lastError || !dataUrl) {
          sendResponse({ success: false, error: (chrome.runtime.lastError && chrome.runtime.lastError.message) || 'no image data' });
          return;
        }
        // conflictAction 'overwrite' so a retry replaces the file instead of
        // creating "capture-NNN (1).jpg", which would break page ordering.
        chrome.downloads.download(
          { url: dataUrl, filename: message.filename, saveAs: false, conflictAction: 'overwrite' },
          (downloadId) => {
            if (chrome.runtime.lastError) {
              sendResponse({ success: false, error: chrome.runtime.lastError.message });
            } else {
              sendResponse({ success: true, downloadId });
            }
          }
        );
      });
    } catch (e) {
      // captureVisibleTab can throw synchronously (e.g. capture throttle);
      // always reply so the caller's await never hangs.
      sendResponse({ success: false, error: (e && e.message) || String(e) });
    }
    return true; // keep the message channel open for the async sendResponse
  }

  // Screenshot mode: relay a "go to next spread" request to every europathek frame.
  if (message.type === 'ADVANCE_REQUEST') {
    chrome.tabs.query({ url: '*://www.europathek.de/*' }, (tabs) => {
      tabs.forEach(tab => {
        chrome.tabs.sendMessage(tab.id, { type: 'ADVANCE' })
          .catch(() => { /* frame may not have a listener */ });
      });
    });
    sendResponse({ success: true });
    return true;
  }

  // Handle PDF download from iframe
  if (message.type === 'IFRAME_DOWNLOAD') {
    console.log('[EUROPATHEK-BG] Downloading:', message.filename);

    // Convert base64 to data URL
    const dataUrl = 'data:application/pdf;base64,' + message.data;

    // Use Chrome downloads API
    chrome.downloads.download({
      url: dataUrl,
      filename: message.filename,
      saveAs: false
    }, (downloadId) => {
      if (chrome.runtime.lastError) {
        console.error('[EUROPATHEK-BG] Download error:', chrome.runtime.lastError);
      } else {
        console.log('[EUROPATHEK-BG] Download started:', downloadId);
      }
    });

    sendResponse({ success: true });
    return true;
  }

  // Messages from iframe that need to go to popup
  if (message.type && message.type.startsWith('IFRAME_')) {
    // These are handled by the popup's onMessage listener
    // Just let them pass through
    return false;
  }

  return false;
});

// Handle extension install/update
chrome.runtime.onInstalled.addListener(() => {
  console.log('[EUROPATHEK-BG] Extension installed/updated');
});
