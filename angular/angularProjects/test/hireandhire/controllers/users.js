// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../helpers/db');

console.log(mongoDbUrl);

module.exports = {
    createUser: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('users');
            })
            .then(users => {
                console.log('XXXXXXXXX');
                console.log(req.body.email);
                console.log('XXXXXXXXX');

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
                if (!req.body.name) {
                    throw res.status(403).json({ error: 'Name is mandatory' });
                }
                if (!req.body.location) {
                    req.body.location = {};
                }
                if (!req.body.description) {
                    req.body.description = {};
                }

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
                res.status(200).json({ successes: 'ok', user });
            })
            .catch(err => console.log(err));
    }
};

// module.exports = {
//     createUser: async (req, res, next) => {
//         if (!req.body.email) {
//             return res.status(403).json({ error: 'fuck off need email' });
//         }

//         if (!req.body.name) {
//             return res.status(403).json({ error: 'fuck off need name' });
//         }

//         if (!req.body.location) {
//             req.body.location = {};
//         }

//         if (!req.body.description) {
//             req.body.description = {};
//         }

//         var newUser = {
//             name: {
//                 first: req.body.name.first,
//                 last: req.body.name.last
//             },
//             location: {
//                 lng: req.body.location.lng || '',
//                 lat: req.body.location.lat || ''
//             },
//             email: req.body.email,
//             password: req.body.password,
//             description: {
//                 public: req.body.description.public || '',
//                 private: req.body.description.private || ''
//             }
//         };

//         try {
//             const db = await MongoClient.connect(mongoDbUrl);
//             const findUser = await db.collection('users').findOne({ email: req.body.email });

//             if (findUser) {
//                 return res.status(403).json({ error: 'shit... we have this user already' });
//             }

//             const user = await db.collection('users').insertOne(newUser);

//             db.close();

//             res.status(200).json({ successes: 'ok', user });
//         } catch (error) {
//             console.error(error);
//         }
//     },

//     findUser: async (req, res, next) => {
//         try {
//             const db = await MongoClient.connect(mongoDbUrl);
//             const user = await db.collection('users').findOne({ email: req.params.email });
//             if (!user) {
//                 return res.status(404).json({ error: 'WOOOTTT!!! User not found' });
//             }

//             db.close();

//             res.status(200).json({ successes: 'ok', user });
//         } catch (error) {
//             console.error(error);
//         }
//     }
// };

// OLD CALLBACK HELL CODE

// module.exports = {
//   createUser:  (req, res, next) => {

//           if (!req.body.email) {
//             return res.status(403).json({ error: 'fuck off need email' });
//           }

//           if (!req.body.name) {
//             return res.status(403).json({ error: 'fuck off need name' });
//           }

//           if (!req.body.location) {
//             req.body.location = {};
//           }

//           if (!req.body.description) {
//             req.body.description = {};
//           }

//           var user = {
//             name: {
//               first: req.body.name.first,
//               last: req.body.name.last
//             },
//             location: {
//               lng: req.body.location.lng || '',
//               lat: req.body.location.lat || ''
//             },
//             email: req.body.email,
//             password: req.body.password,
//             description: {
//               public: req.body.description.public || '',
//               private: req.body.description.private || ''
//             }
//           };

//     MongoClient.connect(mongoDbUrl, function(err, db) {
//       if (err) throw err;

//       db.collection('users').findOne({ email: req.params }, function(err, result) {
//         if (err) throw err;

//         if (result) {
//           return res.status(403).json({ error: 'shit user email is here' });
//         }

//         db.collection('users').insertOne(user, function(err, result) {
//           if (err) throw err;
//           console.log('user is added');
//           db.close();
//         });
//         res.status(200).json({ successes: 'ok', user: user });
//       });
//     });
//   },

//   findUser:  (req, res, next) => {
//     MongoClient.connect(mongoDbUrl, function(err, db) {
//       if (err) throw err;

//       db.collection('users').findOne({ email: req.params.email }, function(err, result) {
//         if (err) throw err;

//         if (!result) {
//           return res.status(404).json({ error: 'User not found' });
//         }

//         db.close();

//         res.status(200).json({ successes: 'ok', user: result });
//       });
//     });
//   }
// };
