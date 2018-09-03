let http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            document.getElementById('message').innerHTML = "OK";
        } else {
            document.getElementById('message').innerHTML = "ERROR";
        }
    }
};
http.open("HEAD", "https://intra.epitech.eu/user/notification/message?format=json", true);
http.send();