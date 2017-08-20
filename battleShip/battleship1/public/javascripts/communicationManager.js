class Communication {
    constructor() {
        this.userIndex = 1;
        this.username;
        this.socket = io.connect('http://localhost:3000');
    }

    loginFunctuon() {
        let login = document.getElementById("loginSubmit").addEventListener("click", () => {
            this.username = document.getElementById("username").value;
            this.socket.emit('username', this.username); //emit
            this.redirectToLoby();
            this.createNameInLoby(this.username);
            document.getElementById("greeding").innerText = `Hi, ${this.username}!`;
            userconnections.addUser(this.username); //if userConnection changes need to change this.
        });
    }

    createNameInLoby(username) {
        let ul = document.getElementById("users");
        let li = document.createElement("li");
        li.addEventListener("click", function(event) { socket.emit('requestGame', li.innerHTML); }, false);
        ul.appendChild(li);
    }

    redirectToLoby() {
        this.hideDiv('login');
        this.showDiv('greedingLoby');
        this.showDiv('gameLoby');
    }

    startCommunication() {
        this.socket.on('connection Established', (usersFromServer) => { //connected
            if (usersFromServer) {
                getuserFromServer();
            }
            this.loginFunctuon();
        });
        this.getuserFromServer();
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

    firstTimeFromServer(usersFromServer) {
        let ul = document.getElementById("users");
        usersFromServer.usersToSend.forEach((element) => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(`${element}: ${comminication.userIndex++}`));
            li.addEventListener("click", function(event) { socket.emit('requestGame', li.innerHTML); }, false);
            ul.appendChild(li);
        });
    }

    getuserFromServer() {
        this.socket.on('sendUsersFromServer', (usersFromServer) => {
            let ul = document.getElementById("users");
            usersFromServer.usersToSend.forEach((element) => {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(`${element}: ${comminication.userIndex++}`));
                li.addEventListener("click", function(event) { socket.emit('requestGame', li.innerHTML); }, false);
                ul.appendChild(li);
            }, this);
        });
        this.socket.on('sendUserFromServer', (usersFromServer) => {
            this.createNameInLoby(usersFromServer)
        });
    }

    refreshUsers() {

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