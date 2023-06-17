chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getSelection') {
    sendResponse({ word: window.getSelection().toString() });
  }
});
