chrome.browserAction.setBadgeText({text: " " })

function checkIntra() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
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
setInterval(function () {
   checkIntra();
}, 3000);