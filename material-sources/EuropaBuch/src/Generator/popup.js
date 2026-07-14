// Popup script for EUROPATHEK PDF Exporter

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const startPageInput = document.getElementById('startPage');
  const endPageInput = document.getElementById('endPage');
  const delayInput = document.getElementById('delay');
  const statusText = document.getElementById('statusText');
  const progressBar = document.getElementById('progressBar');
  const screenshotMode = document.getElementById('screenshotMode');
  const lblStart = document.getElementById('lblStart');
  const lblEnd = document.getElementById('lblEnd');
  const lblDelay = document.getElementById('lblDelay');
  const infoNote = document.getElementById('infoNote');

  let isRunning = false;

  // Relabel the form for whichever mode is active.
  function applyMode() {
    if (screenshotMode.checked) {
      lblStart.textContent = 'First file number';
      lblEnd.textContent = 'Last file number (= number of screenshots)';
      lblDelay.textContent = 'Delay after page flip (ms)';
      infoNote.innerHTML = 'Open the book and navigate to the FIRST page you want, then Start. ' +
        'It screenshots the visible page, presses →, waits, and repeats. ' +
        'Keep this Chrome window visible and do not switch tabs while it runs.';
    } else {
      lblStart.textContent = 'Start Page';
      lblEnd.textContent = 'End Page';
      lblDelay.textContent = 'Delay between pages (ms)';
      infoNote.textContent = 'Make sure you have a book open in EUROPATHEK before starting.';
    }
  }

  // Load saved settings
  chrome.storage.local.get(['startPage', 'endPage', 'delay', 'screenshotMode', 'ssLastSaved', 'ssTotal'], (result) => {
    if (result.startPage) startPageInput.value = result.startPage;
    if (result.endPage) endPageInput.value = result.endPage;
    if (result.delay) delayInput.value = result.delay;
    if (result.screenshotMode) screenshotMode.checked = true;
    applyMode();
    // Resume hint: show where the last screenshot run got to.
    if (screenshotMode.checked && result.ssLastSaved) {
      const total = result.ssTotal ? `/${result.ssTotal}` : '';
      updateStatus(`Last saved: capture ${result.ssLastSaved}${total}. To resume, set First = ${result.ssLastSaved + 1} and navigate the reader to that spread.`, '');
    }
  });

  // Save settings on change
  [startPageInput, endPageInput, delayInput].forEach(input => {
    input.addEventListener('change', () => {
      chrome.storage.local.set({
        startPage: parseInt(startPageInput.value),
        endPage: parseInt(endPageInput.value),
        delay: parseInt(delayInput.value)
      });
    });
  });

  screenshotMode.addEventListener('change', () => {
    chrome.storage.local.set({ screenshotMode: screenshotMode.checked });
    applyMode();
  });

  // Start extraction
  startBtn.addEventListener('click', async () => {
    const startPage = parseInt(startPageInput.value);
    const endPage = parseInt(endPageInput.value);
    const delay = parseInt(delayInput.value);

    if (startPage > endPage) {
      updateStatus('Start page must be less than end page', 'error');
      return;
    }

    isRunning = true;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    updateStatus('Starting export...', '');

    // Get the active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab.url.includes('europathek.de')) {
      updateStatus('Please navigate to EUROPATHEK first', 'error');
      resetButtons();
      return;
    }

    // Send start command to content script
    const mode = screenshotMode.checked ? 'screenshot' : 'fetch';
    chrome.tabs.sendMessage(tab.id, {
      action: 'START_EXPORT',
      config: { startPage, endPage, delay, mode }
    });
  });

  // Stop extraction
  stopBtn.addEventListener('click', async () => {
    isRunning = false;
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, { action: 'STOP_EXPORT' });
    updateStatus('Stopping...', '');
    resetButtons();
  });

  // Listen for progress updates from content script
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'PROGRESS_UPDATE') {
      const { currentPage, totalPages, status } = message;
      const progress = ((currentPage - parseInt(startPageInput.value)) /
                       (parseInt(endPageInput.value) - parseInt(startPageInput.value) + 1)) * 100;
      progressBar.style.width = `${progress}%`;
      updateStatus(`Page ${currentPage}/${totalPages}: ${status}`, '');
    } else if (message.action === 'EXPORT_COMPLETE') {
      updateStatus('Export complete!', 'success');
      progressBar.style.width = '100%';
      resetButtons();
    } else if (message.action === 'EXPORT_ERROR') {
      updateStatus(`Error: ${message.error}`, 'error');
      resetButtons();
    }
  });

  function updateStatus(text, className) {
    statusText.textContent = text;
    statusText.className = `status-value ${className}`;
  }

  function resetButtons() {
    isRunning = false;
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }

  // Check current status on popup open
  checkStatus();

  async function checkStatus() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url.includes('europathek.de')) {
      try {
        chrome.tabs.sendMessage(tab.id, { action: 'GET_STATUS' }, (response) => {
          if (chrome.runtime.lastError) {
            updateStatus('Ready (reload page if extension was just installed)', '');
            return;
          }
          if (response && response.isRunning) {
            isRunning = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;
            updateStatus(`Running: Page ${response.currentPage}`, '');
          }
        });
      } catch (e) {
        updateStatus('Ready to export', '');
      }
    } else {
      updateStatus('Navigate to EUROPATHEK to start', '');
    }
  }
});
