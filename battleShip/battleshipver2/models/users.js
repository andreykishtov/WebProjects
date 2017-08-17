class Users {
    constructor() {
        this.users = [];
        this.socketid = [];
        this.currentGame = [];
    }
    getUsers() {
        return this.users;
    }
    addUser(username, socketid) {
        this.users.push(username);
        this.socketid.push(socketid);
        //console.log(users);
    }
    removeUser() {

    }
    checkUser(username, socketid) {
        for (let index = 0; index < this.users.length; ++index) {
            if (username === this.users[index]) {
                return true;
            }
        }
        this.addUser(username, socketid);
    }

    findsocketID(username) {
        for (let index = 0; index < this.users.length; ++index) {
            if (username === this.users[index]) {
                return this.socketid[index];
            }
        }
    }

    findUserName(socketid) {
        for (let index = 0; index < this.socketid.length; ++index) {
            if (socketid === this.socketid[index]) {
                return this.users[index];
            }

        }
    }
    findCurrentGame(socketid) {
        for (let index = 0; index < this.currentGame.length; ++index) {
            if (socketid === this.currentGame[index].player1 || socketid === this.currentGame[index].player2) {
                return this.currentGame[index];
            }
        }
    }
}

var users = new Users;


module.exports = users;