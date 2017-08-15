class Users {
    constructor() {
        this.users = [];
        this.socketid = [];
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
        //if (typeof(username) !== 'string') {
        //return true;
        //}
        //for (var index = 0; index < this.users.length; index++) { //checks if exists
        // if (username !== this.users[index]) {
        //     return;
        // }

        //}
        this.addUser(username, socketid);
    }
    findsocketID(username) {
        for (var index = 0; index < this.users.length; index++) {
            if (username === this.users[index]) {
                return this.socketid[index];
            }

        }
    }
}

var users = new Users;


module.exports = users;