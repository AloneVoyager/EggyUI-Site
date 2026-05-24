function browserIsIE() {
    var ua = window.navigator.userAgent;

    if (ua.indexOf('MSIE') > 0 || ua.indexOf('Trident') > 0) {
        return true;
    }

    return false;
}

(function() {
    if (browserIsIE()) {
        window.location.replace('https://casoneroutegold-prod-bggfgca0dkaag8a8.b01.azurefd.net/en-us/edge/server/download');
    }

    console.log('The redirect script has been executed.');
})();