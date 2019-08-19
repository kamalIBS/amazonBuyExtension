// Inform the background page that 
// this tab should have a page-action.
// chrome.runtime.sendMessage({
//     from: 'content',
//     subject: 'showPageAction',
// });
  
// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        // Collect the necessary data. 
        var domInfo = {
            startOrder: document.querySelectorAll('startOrder').length,
            fillAddress: document.querySelectorAll('fillAddress').length,
        };
        alert(domInfo);
        // Directly respond to the sender (popup), 
        // through the specified callback.
        response(domInfo);
    }
});