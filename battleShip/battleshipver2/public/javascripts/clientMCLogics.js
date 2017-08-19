class CommunicationLogic {
    constructor() {
        this.username;
    }

    firstTimeGetUsersFromServer(usersFromServer) {
        usersFromServer.forEach((element) => {
            this.createOption(element, 'Online');
        });
    }

    createOption(playerName, playerStatus) { //add player
        let ul = document.getElementById("playerList");
        let ulStatus = document.getElementById("playerStatus");
        let li = document.createElement("li");
        li.addEventListener('click', function(event) {
            this.classList.toggle("highlight");
        })
        li.appendChild(document.createTextNode(playerName));
        ul.appendChild(li);
        let liStatus = document.createElement("li");
        liStatus.data = username;
        liStatus.appendChild(document.createTextNode(playerStatus));
        ulStatus.appendChild(liStatus);
    }

    addNewUser() {
        let login = document.getElementById("submitNewUser");
        login.addEventListener("click", () => {
            let username = document.getElementById("username").value;
            if (username.length < 1 || username.length > 25) {
                alert('Wrong Nickname');
                return;
            }
            communication.sendUserToPlayer(username);
            document.getElementById("greeting").style.display = 'none';
            document.getElementById("playerlistDiv").style.display = 'flex';
            this.changeStatus(username);
            // this.waitForPlayers();
        });
    }

    usernameIsBad(username) {
        alert(`UserName Allready Exsists: ${username}`); //doesn`t work
        document.getElementById("greeting").style.display = 'block';
        document.getElementById("playerlistDiv").style.display = 'none';
        //document.getElementById("greeting").style.display = 'block'; change to block after
    }

    waitForPlayers() {
        let select = document.getElementById("playerList");
        let div = document.createElement("div");
        let body = document.getElementsByTagName("body");
        div.style.backgroundColor = "grey";
        div.style.zIndex = 2;
        div.style.width = '2000px';
        div.style.height = '2000px';
        body[0].prepend(div);
    }

    createGame() {
        let selectPlayer = document.getElementById("selectInput");
        selectPlayer.addEventListener("click", () => {
            let username = document.getElementsByClassName("highlight");
            if (username.length > 1) {
                alert('Please Choice Only One Player');
                return;
            }
            username = username[0].innerText;
            ////////////////
            let ulofPlayerNames = document.getElementById("playerList");
            let ulStatusofPlayers = document.getElementById("playerStatus");
            for (var index = 0; index < ulofPlayerNames.children.length; index++) {
                if (username === ulofPlayerNames.children[index].innerText) {
                    let usernamestatus = ulStatusofPlayers.children[index].innerHTML;
                    if (usernamestatus === 'Playing') {
                        alert('This Player Is allready Playing');
                        return;
                    }
                }
            }
            startGame(username); //creates Canvas
            communication.startGame(username); //STARTS GAME
        });
    }

    playGame(ships) {
        battleshipGame.drawBattleship(ships);
    }

    changeStatus(username, username2) {
        this.UsernameChangeStatus(username, 'Playing');
        this.UsernameChangeStatus(username2, 'Playing');
    }

    UsernameChangeStatus(username, status) {
        let ulofPlayerNames = document.getElementById("playerList");
        let ulStatusofPlayers = document.getElementById("playerStatus");
        for (var index = 0; index < ulofPlayerNames.children.length; index++) {
            if (username === ulofPlayerNames.children[index].innerText) {
                let element = ulStatusofPlayers.children[index];
                element.innerHTML = status;
            }
        }
    }

    removePlayer(username) { //need to check
        let ulofPlayerNames = document.getElementById("playerList");
        let ulStatusofPlayers = document.getElementById("playerStatus");
        for (var index = 0; index < ulofPlayerNames.children.length; index++) {
            if (username === ulofPlayerNames.children[index].innerText) {
                var element1 = ulofPlayerNames.children[index];
                element1.parentNode.removeChild(element1);
                var element2 = ulStatusofPlayers.children[index];
                element2.parentNode.removeChild(element2);
            }
        }
    }

    endGame(usernameOfWinner, NameOfloser, toall) {
        ///wait For It
        if (!toall) {
            battleshipGame.drawText(`The Winner Is ${usernameOfWinner}`);
            setTimeout(function() {
                let canvas = document.getElementById('canvas');
                canvas.innerHTML = '';
                let playerList = document.getElementById('playerlistDiv');
                playerList.style.display = 'block';
                cmlogic.UsernameChangeStatus(usernameOfWinner, 'Online');
                cmlogic.UsernameChangeStatus(NameOfloser, 'Online');
            }, 3000);
        } else {
            cmlogic.UsernameChangeStatus(usernameOfWinner, 'Online');
            cmlogic.UsernameChangeStatus(NameOfloser, 'Online');
        }
    }
}

var cmlogic = new CommunicationLogic;


window.onload = function() {
    communication.startComunication();
    cmlogic.addNewUser();
    communication.waitingForPlayer();
    cmlogic.createGame();
}