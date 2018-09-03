chrome.browserAction.setBadgeText({text: " " })

let button = document.getElementById("isUp");

setInterval(function () {
    let img = new Image();
    img.src = "https://intra.epitech.eu/static530ebd62bc289f486af254df31812fa9fdeaa0e7/img/logo.png";
    img.onload = function () {
        if (img.naturalWidth === 0) {
            button.innerText = "DOWN";
            chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
        } else {
            button.innerText = "UP";
            chrome.browserAction.setBadgeBackgroundColor({ color: [0, 255, 0, 255] });
        }
    };
}, 3000);