const JWT = require('jsonwebtoken');
const Users = require('../models/users');
const { JWT_SECRET } = require('../configuration');

signToken = user => {
    return JWT.sign(
        {
            iss: 'Trippy',
            sub: user._id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        },
        JWT_SECRET
    );
};

module.exports = {
    getUser: async (req, res) => {
        try {
            const user = await Users.findById({ _id: req.params.userId }, '-__v');
            res.status(200).json(user);
        } catch (error) {
            res.send(error);
        }
    },
    addUser: async (req, res) => {
        const newUser = new Users(req.body);
        const user = await newUser.save();
        res.status(200).json({ user, message: 'Updated Successfully' });
    },
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;

        const foundUser = await Users.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email Allready in use' });
        }

        //create a new user
        const newUser = new Users({ email, password });
        await newUser.save();

        const token = signToken(newUser);

        //Respond with a token
        res.status(200).json({ token });
    },
    signIn: async (req, res, next) => {
        // generate token
        const token = signToken(req.user);
        res.status(200).json({ token });
    },
    secret: async (req, res, next) => {
        res.json({ secret: 'resource' });
    }
};
