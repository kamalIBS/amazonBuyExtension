// check if user is logged in
let _loginEl = document.getElementById("nav-al-signin");
if(_loginEl && _loginEl.innerHTML.length!=0){
    alert('Please login before placing order');
}else{
    if (window.location.href.indexOf("offer-listing") > -1) {
        let _offerEl = jQuery('div.olpOffer');
        // check if any any offer exists
        if(_offerEl.length==0 || _offerEl==undefined){
            alert('No offers available');
        }
    }
}

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'ErrorMsg')) {
        alert(msg.textMessage);
    }else if((msg.from === 'popup') && (msg.subject === 'elementCheck')){
        if(document.getElementById("nav-al-signin")==null){
            if (window.location.href.indexOf("addressselect") > -1 || window.location.href.indexOf("pay-select") > -1) {
                chrome.storage.sync.get('payLoad',function(requestPayLoad){
                    let myObj = requestPayLoad.payLoad.shippingAddress;
                    document.getElementById("enterAddressFullName").value = myObj.name;
                    document.getElementById("enterAddressAddressLine1").value = myObj.street1;
                    document.getElementById("enterAddressAddressLine2").value = myObj.street2;
                    document.getElementById("enterAddressCity").value = myObj.cityName;
                    document.getElementById("enterAddressStateOrRegion").value = myObj.stateOrProvince;
                    document.getElementById("enterAddressPostalCode").value = myObj.postalCode;
                    document.getElementById("enterAddressCountryCode").value = 'US';
                    document.getElementById("enterAddressPhoneNumber").value = myObj.phone;
                });
            }else{
                alert('Goto the address page then fill-in address');
            }
        }else{
            alert('Please login before filling Address');
        }
    }
});