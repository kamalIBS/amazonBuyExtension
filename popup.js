// Update the relevant fields with the new data.
const setDOMInfo = info => {
    document.getElementById('startOrder').textContent = info.startOrder;
    document.getElementById('fillAddress').textContent = info.fillAddress;
};
  
// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {from: 'popup', subject: 'DOMInfo'},
            // ...also specifying a callback to be called 
            //    from the receiving end (content script).
            setDOMInfo
        );
    });
});

// // Start Order
// document.addEventListener('DOMContentLoaded', function() {
//     let checkPageButton = document.getElementById('startOrder');
//     checkPageButton.addEventListener('click', function() {
//         chrome.storage.sync.get('payLoad',function(requestPayLoad){
//             window.open(requestPayLoad.payLoad.purchaseInfo.offerUrl);
//         });
//     });
// });

// // Fill Address
// document.addEventListener('DOMContentLoaded', function() {
//     var checkPageButton = document.getElementById('fillAddress');
//     checkPageButton.addEventListener('click', function() {
//         chrome.tabs.getSelected(null, function(tab) {
//             if(document.getElementById("enterAddressFullName")!=undefined){
//                 chrome.storage.sync.get('payLoad',function(requestPayLoad){
//                     let myObj = requestPayLoad.payLoad.shippingAddress;
//                     document.getElementById("enterAddressFullName").value = myObj.name;
//                     document.getElementById("enterAddressAddressLine1").value = myObj.street1;
//                     document.getElementById("enterAddressAddressLine2").value = myObj.street2;
//                     document.getElementById("enterAddressCity").value = myObj.cityName;
//                     document.getElementById("enterAddressStateOrRegion").value = myObj.stateOrProvince;
//                     document.getElementById("enterAddressPostalCode").value = myObj.postalCode;
//                     document.getElementById("enterAddressCountryCode").value = 'US';
//                     document.getElementById("enterAddressPhoneNumber").value = myObj.phone;
//                 });
//             }else{
//                 alert("Hello..! It's my first chrome extension.");
//             }
//         });
//     });
// });