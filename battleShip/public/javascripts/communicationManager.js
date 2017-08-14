var socket = io.connect('http://localhost:3000');
class Communication {
    constructor() {
        this.userIndex = 1;
        this.username
    }
    startCommunication() {
        var login = document.getElementById("loginSubmit").addEventListener("click", () => {
            this.username = document.getElementById("username").value;
            socket.emit('username', this.username);
            this.hideDiv('login');
            this.showDiv('greedingLoby');
            this.showDiv('gameLoby');
            document.getElementById("greeding").innerText = `Hi, ${this.username}!`;
            userconnections.addUser(this.username); //if userConnection changes need to change this.
            this.getuserFromServer(this.username);
        })
    }

    hideDiv(idOfDIv) {
        var loginDiv = document.getElementById(idOfDIv);
        if (loginDiv.style.display === 'none') {
            loginDiv.style.display = 'block';
        } else {
            loginDiv.style.display = 'none';
        }
    }

    showDiv(idOfDIv) {
        var loginDiv = document.getElementById(idOfDIv);
        if (loginDiv.style.display === 'flex') {
            loginDiv.style.display = 'none';
        } else {
            loginDiv.style.display = 'flex';
        }
    }

    getuserFromServer(username) {
        socket.emit('sendUserNames');
        socket.on('sendUsersFromServer', function(usersFromServer) {
            var ul = document.getElementById("users");
            usersFromServer.usersToSend.forEach(function(element) {
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(`${element}: ${comminication.userIndex++}`));
                ul.appendChild(li);
            }, this);
        });
    }

    endCommunication() {

    }
}

class Line extends Communication {
    constructor() {
        super();
    }
    checkLine() {

    }
}

var comminication = new Communication;
comminication.startCommunication();