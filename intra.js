let http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            let result = "";
            for (let i = 0; i < 5; i++) {
                result += "<h3>" + json[i].title + "</h3>" + json[i].content + "<br/><br/>"
                if (i != 4)
                    result += "<hr>"
            }
            document.getElementById('message').innerHTML = "<div>" + result.replace(/<a href="/g, '<a target="_blank" href="https://intra.epitech.eu') + "</div>";
        } else if (this.status == 401) {
            document.getElementById('message').innerHTML = "<div><a href='https://intra.epitech.eu' target='_blank'>Please log in your account</a></div>";
        } else {
            document.getElementById('message').innerHTML = "An error occured while loading messages.";
        }
    }
};
http.open("GET", "https://intra.epitech.eu/user/notification/message?format=json", true);
http.send();

http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            let json = JSON.parse(this.responseText);
            document.getElementById('profile').innerHTML = json.title + " Credits: " + json.credits + " - GPA: " + json.gpa[0].gpa;
            http = new XMLHttpRequest();
            http.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        let json = JSON.parse(this.responseText);
                        let result = "<br/><br/>";
                        for (let elem in json)
                            result += json[elem].title + "<br/>";
                        document.getElementById('profile').innerHTML += result;
                    }
                }
            };
            http.open("GET", "https://intra.epitech.eu/user/notification/alert?format=json", true);
            http.send();
        } else {
            document.getElementById('profile').innerHTML = "An error occured while loading profile.";
        }
    }
};
http.open("GET", "https://intra.epitech.eu/user/?format=json", true);
http.send();