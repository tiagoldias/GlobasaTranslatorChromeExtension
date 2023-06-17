chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'getSelection') {
    chrome.scripting.executeScript(
      {
        target: { tabId: sender.tab.id },
        function: () => window.getSelection().toString()
      },
      function (result) {
        sendResponse({ word: result[0].result });
      }
    );
    return true;
  }
});
