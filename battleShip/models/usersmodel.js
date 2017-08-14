class Users {
    constructor() {
        this.users = [];
    }
    getUsers() {
        return this.users;
    }
    addUser(username) {
        this.users.push(username);
        console.log(users);
    }
    removeUser() {

    }
    Printuserlist() {
        return this.users;
    }
    checkUser(username) {
        if (typeof(username) !== 'string') {
            return true;
        }
        for (var index = 0; index < this.users.length; index++) { //checks if exists
            // if (username !== this.users[index]) {
            //     return;
            // }

        }
        this.addUser(username);
    }
}

var users = new Users;


module.exports = users;