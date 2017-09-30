const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../../helpers/db');
module.exports = {
    createUser(req) {
        let usersObj;
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => {
                usersObj = users;
                return users.findOne({ email: req.body.email });
            })
            .then(inUse => {
                return inUse ? foundEmail() : AddUser();

                function foundEmail() {
                    res.status(200).json({ error: 'Email is already in use' });
                    return inUse;
                }

                function AddUser() {
                    return usersObj.insertOne({
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
                    });
                }
            })
            .then(result => {
                database.close();
                return result;
            })
            .catch(err => console.log(err));
    },
    findUser(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => users.findOne({ email: req.params.email }))
            .then(user => {
                database.close();
                return user;
            })
            .catch(err => console.log(err));
    },
    findUserById(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => users.findOne(ObjectId(req.params.id)))
            .then(user => {
                database.close();
                return user;
            })
            .catch(err => console.log(err));
    },
    findUsersByIds(req) {
        let database;
        let array = req.body.array.map(userId => ObjectId(userId));
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => users.find({ _id: { $in: array } }, { password: 0 }).toArray())
            .then(user => {
                database.close();
                return user;
            })
            .catch(err => console.log(err));
    },
    validate(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users =>
                users.findOne(
                    {
                        email: req.body.email,
                        password: req.body.password
                    },
                    { password: 0 }
                )
            )
            .then(user => {
                database.close();
                return user;
            })
            .catch(err => console.log(err));
    }
};
