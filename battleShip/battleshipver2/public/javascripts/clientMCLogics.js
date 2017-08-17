class CommunicationLogic {
    constructor() {
        this.username;
    }

    firstTimeGetUsersFromServer(usersFromServer) {
        usersFromServer.forEach((element) => {
            this.createOption(element);
        });
    }

    createOption(element) {
        let select = document.getElementById("playerList");
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(element));
        select.appendChild(option);
    }

    addNewUser() {
        let login = document.getElementById("submitNewUser");
        login.addEventListener("click", () => {
            let username = document.getElementById("username").value;
            communication.sendUserToPlayer(username);
            document.getElementById("greeting").style.display = 'none';
            // this.waitForPlayers();
        });
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
            this.username = document.getElementById("playerList").value;
            communication.startGame(this.username); //STARTS GAME
        });
    }

    playGame(ships) {
        //console.log(ships);
        battleshipGame.drawBattleship(ships);
    }

}
var cmlogic = new CommunicationLogic;


window.onload = function() {
    communication.startComunication();
    cmlogic.addNewUser();
    communication.waitingForPlayer();
    cmlogic.createGame();
}


// c1.addEventListener('mousemove', function (e) {

//             var pos = self.getCanvasCoordinates(e, self.canvas[1]);
//             self.squareHover = self.getSquare(pos.x, pos.y);
//             self.drawGrid(1);
//         });
//         //Draw normal grid when mouse out
//         c1.addEventListener('mouseout', function () {
//             //  console.log("bb", this);
//             self.squareHover = { x: -1, y: -1 };
//             self.drawGrid(1);
//         });