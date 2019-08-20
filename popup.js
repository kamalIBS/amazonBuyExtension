// Start Order
document.addEventListener('DOMContentLoaded', function() {
    let checkPageButton = document.getElementById('startOrder');
    checkPageButton.addEventListener('click', function() {
        chrome.storage.sync.get('payLoad',function(requestPayLoad){
            window.open(requestPayLoad.payLoad.purchaseInfo.offerUrl);
        });
    });
});

// Fill Address
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('fillAddress');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.executeScript( null, {
            code:'var elLength = document.getElementById("nav-al-signin").innerHTML.length; elLength'
        },
        function(results){
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, tabs => {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    {
                        from: 'popup',
                        subject: 'elementCheck',
                        elementCount: results,
                        textMessage:''
                    },
                );
            });
        } );
    });
});