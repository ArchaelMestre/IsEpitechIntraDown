let http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let result = "";
            for (let i = 0; i < 5; i++)
                result += "<div><h3>" + json[i].title + "</h3>" + json[i].content + "</div><br/><hr><br/>"
            document.getElementById('message').innerHTML = result.replace('<a href=\"', '<a target="_blank" href=\"https://intra.epitech.eu');
        } else {
            document.getElementById('message').innerHTML = "An error occured while loading messages.";
        }
    }
};
http.open("GET", "https://intra.epitech.eu/user/notification/message?format=json", true);
http.send();