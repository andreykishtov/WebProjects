const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../helpers/db');

module.exports = {
    createUser: (req, res, next) => {
        if (!req.body.name) {
            throw res.status(403).json({ error: 'Name is mandatory' });
        }
        if (!req.body.location) {
            req.body.location = {};
        }
        if (!req.body.description) {
            req.body.description = {};
        }
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => {
                if (!req.body.email) {
                    throw res.status(403).json({ error: 'Email is mandatory' });
                }
                users.findOne({ email: req.body.email }, function(err, result) {
                    if (result) {
                        throw res.status(403).json({ error: 'Email is already in use' });
                    }
                });
                return users;
            })
            .then(users => {
                let user = {
                    name: {
                        first: req.body.name.first,
                        last: req.body.name.last
                    },
                    location: {
                        lng: req.body.location.lng || '',
                        lat: req.body.location.lat || ''
                    },
                    email: req.body.email,
                    password: req.body.password,
                    description: {
                        public: req.body.description.public || '',
                        private: req.body.description.private || ''
                    }
                };

                users.insertOne(user, function(err, result) {
                    if (err) throw err;
                    console.log('User added');
                    database.close();
                    res.status(200).json({ successes: 'ok', userId: result.insertedId });
                });
            })
            .catch(err => console.log(err));
    },
    findUser: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => {
                return users.findOne(ObjectId(req.params.email));
            })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ error: 'User not found' });
                }
                database.close();
                res.status(200).json({ user });
            })
            .catch(err => console.log(err));
    },
    validate: (req, res, next) => {
        if (!req.body.email) {
            throw res.status(403).json({ error: 'Email is mandatory' });
        }
        if (!req.body.password) {
            throw res.status(403).json({ error: 'Password is mandatory' });
        }
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => {
                return users.findOne(
                    {
                        email: req.body.email,
                        password: req.body.password
                    },
                    { password: 0 }
                );
            })
            .then(user => {
                database.close();
                res.status(200).json(user ? user : null);
            })
            .catch(err => console.log(err));
    }
};
