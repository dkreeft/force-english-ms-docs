const desiredLocale = "/en-us/";
const regex = /\/[a-zA-z]{2}-[a-zA-Z]{2}\//i;

chrome.webNavigation.onBeforeNavigate.addListener(function (address) {
    if (address.url.indexOf("learn.microsoft.com") != -1) {
        if (address.url.indexOf(desiredLocale) == -1) {
            let newUrl = address.url.replace(regex, desiredLocale);
            chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
                chrome.tabs.update(tab[0].id, {url: newUrl});
            });
        };
    };
});
