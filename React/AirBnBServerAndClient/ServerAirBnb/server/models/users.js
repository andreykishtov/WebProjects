const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
    // imageUrl: String,
    // name: String
});

const User = mongoose.model('user', Users);

module.exports = User;
