let button = document.getElementById("isUp");

setInterval(function () {
    let img = new Image();
    img.src = "https://intra.epitech.eu/static530ebd62bc289f486af254df31812fa9fdeaa0e7/img/logo.png";
    img.onload = function () {
        console.log("UP"); button.innerText = "UP";
        if (img.naturalWidth === 0)
            button.innerText = "DOWN";
    };
}, 3000);