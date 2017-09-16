const MongoClient = require('mongodb').MongoClient;
const mongoDbUrl = require('../helpers/db');

console.log(mongoDbUrl);

module.exports = {
  createUser: async (req, res, next) => {
    if (!req.body.email) {
      return res.status(403).json({ error: 'fuck off need email' });
    }

    if (!req.body.name) {
      return res.status(403).json({ error: 'fuck off need name' });
    }

    if (!req.body.location) {
      req.body.location = {};
    }

    if (!req.body.description) {
      req.body.description = {};
    }

    var newUser = {
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

    try {
      const db = await MongoClient.connect(mongoDbUrl);
      const findUser = await db.collection('users').findOne({ email: req.body.email });

      if (findUser) {
        return res.status(403).json({ error: 'shit... we have this user already' });
      }

      const user = await db.collection('users').insertOne(newUser);

      db.close();

      res.status(200).json({ successes: 'ok', user });
    } catch (error) {
      console.error(error);
    }
  },

  findUser: async (req, res, next) => {
    try {
      const db = await MongoClient.connect(mongoDbUrl);
      const user = await db.collection('users').findOne({ email: req.params.email });
      if (!user) {
        return res.status(404).json({ error: 'WOOOTTT!!! User not found' });
      }

      db.close();

      res.status(200).json({ successes: 'ok', user });
    } catch (error) {
      console.error(error);
    }
  }
};

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
