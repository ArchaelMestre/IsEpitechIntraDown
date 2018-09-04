chrome.browserAction.setBadgeText({text: " " })

function checkIntra() {
    var http = new XMLHttpRequest();
    http.timeout = 5000;
    http.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200 || this.status === 401) {
                chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255] });
            } else {
                chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
            }
        }
    };
    http.open("HEAD", "https://intra.epitech.eu", true);
    http.send();
}

checkIntra();
setInterval(checkIntra, 3000);