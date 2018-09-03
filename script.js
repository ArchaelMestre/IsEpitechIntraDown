/*
function handler() {
    if (this.status === 200) {
        console.log("Up");  
    } else {
        console.log("Down");
    }
}

var client = new XMLHttpRequest();
client.onload = handler;

setInterval(function () {
    try {
        //client.open("POST", "https://intra.epitech.eu/", false);
        client.open("POST", "", true);
        client.send();
    } catch (err) {
        console.log(err);
    }
}, 3000);
*/

let button = document.getElementById("isUp");

setInterval(function (button) {
    let img = new Image();
    img.src = "https://intra.epitech.eu/static530ebd62bc289f486af254df31812fa9fdeaa0e7/img/logo.png";
    img.onload = function () { console.log("UP"); button.value = "UP"; };
    img.onerror = function () { console.log("DOWN"); button.value = "DOWN"; };
}, 3000);