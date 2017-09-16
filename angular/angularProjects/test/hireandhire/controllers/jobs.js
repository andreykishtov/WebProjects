// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../helpers/db');

module.exports = {
    createJob: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                if (!req.body.title) {
                    throw res.status(403).json({ error: 'Title is mandatory' });
                }
                if (!req.body.email) {
                    throw res.status(403).json({ error: 'Publisher email is mandatory' });
                }
                if (!req.body.location) {
                    req.body.location = {};
                }

                let job = {
                    title: req.body.title,
                    publisher: req.body.email,
                    publishedDate: new Date(),
                    skills: [],
                    applicants: [],
                    description: req.body.description || '',
                    location: {
                        lat: req.body.location.lat || '',
                        lng: req.body.location.lng || ''
                    }
                };

                jobs.insertOne(job, function(err, result) {
                    if (err) throw err;
                    console.log('Job added');
                    database.close();
                    res.status(200).json({ successes: 'ok', jobID: result.insertedId });
                });
            })
            .catch(err => console.log(err));
    },
    findJob: (req, res, next) => {
        let database;
        MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('jobs');
            })
            .then(jobs => {
                return jobs.findOne(ObjectId(req.params.id));
            })
            .then(job => {
                if (!job) {
                    return res.status(404).json({ error: 'Job not found' });
                }
                database.close();
                res.status(200).json({ successes: 'ok', job });
            })
            .catch(err => console.log(err));
    }
};

/** THIS CODE IS MUCH BETTER THEN CALLBACK ONE!
	I KNOW YOU DONT WANT TO USE PROMISEE HOWEVER IT IS VERY IMPORTANT TO START
	IF YOU DONT GIVE MONGODB CALLBACK IT WILL RETURN PROMISEE **/
//   findJob: (req, res, next) => {
//     let database;
//     MongoClient.connect(mongoDbUrl)
//       .then(db => {
//         database = db;
//         return db.collection('jobs');
//       })
//       .then(jobs => {
//         return jobs.findOne(ObjectId(req.params.id));
//       })
//       .then(job => {
//         if (!job) {
//           return res.status(404).json({ error: 'job not found' });
//         }
//         database.close();
//         res.status(200).json({ successes: 'ok', job });
//       })
//       .catch(err => console.log(err));
//   }
// };

/** OLD CALLBACK SHIT CODE NEVER USE! **/

// createJob: async (req, res, next) => {
//   if (!req.body.title) {
//     return res.status(403).json({ error: 'fuck off need title' });
//   }

//   if (!req.body.publisher) {
//     return res.status(403).json({ error: 'fuck off need we need your email to get back to you' });
//   }

//   if (!req.body.location) {
//     req.body.location = {};
//   }

//   let job = {
//     title: req.body.title || '',
//     publisher: req.body.email,
//     publishedDate: new Date(),
//     skills: [],
//     applicants: [],
//     description: req.body.description || '',
//     location: {
//       lat: req.body.location.lat || '',
//       lng: req.body.location.lng || ''
//     }
//   };

// MongoClient.connect(mongoDbUrl, function(err, db) {
//   if (err) throw err;
//   db.collection('jobs').insertOne(job, function(err, result) {
//     if (err) throw err;

//     console.log('job is added');

//     db.close();

//     res.status(200).json({ successes: 'ok', jobID: result.insertedId });
//   });
// });

// }

// createJob: async (req, res, next) => {
// 	if (!req.body.title) {
// 		return res.status(403).json({ error: 'fuck off need title' });
// 	}

// 	if (!req.body.publisher) {
// 		return res
// 			.status(403)
// 			.json({ error: 'fuck off need we need your email to get back to you' });
// 	}

// 	if (!req.body.location) {
// 		req.body.location = {};
// 	}

// 	let newJob = {
// 		title: req.body.title || '',
// 		publisher: req.body.email,
// 		publishedDate: new Date(),
// 		skills: [],
// 		applicants: [],
// 		description: req.body.description || '',
// 		location: {
// 			lat: req.body.location.lat || '',
// 			lng: req.body.location.lng || ''
// 		}
// 	};

// 	/** async await example I think this one is the best use it with try catch */
// 	// LOOK AT THIS SHIT! SO MUCH LESS CODE ASYNC AWAIT FOR THE WIN!

// 	try {
// 		const db = await MongoClient.connect(mongoDbUrl);
// 		const job = await db.collection('jobs').insertOne(newJob);

// 		db.close();

// 		res.status(200).json({ successes: 'ok', jobID: job.insertedId });
// 	} catch (error) {
// 		console.error(error);
// 	}
// }
