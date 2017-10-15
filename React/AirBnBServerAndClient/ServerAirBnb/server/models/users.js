const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

Users.pre('save', async function(next) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // generate a password hash (salt +hash)
        const passwordHash = await bcrypt.hash(this.password, salt);
        //re-assign hashed version over original, plain text password
        this.password =passwordHash;
        next();
    } catch (error) {
        next(error);
    }
});

Users.methods.isValidPassword = async function (newPassword) {
    try {
        return await bcrypt.compare(newPassword,this.password);
    } catch (error) {
        throw new Error(error);
    }    
}

const User = mongoose.model('user', Users);

module.exports = User;
