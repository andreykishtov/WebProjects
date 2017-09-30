const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../helpers/db');
const mongoDbQuery = require('../model/mongoDB/users');

module.exports = {
    createUser: (req, res, next) => {
        if (!req.body.name) {
            return res.status(403).json({ error: 'Name is mandatory' });
        }
        if (!req.body.email) {
            return res.status(403).json({ error: 'Email is mandatory' });
        }
        req.body.description = req.body.description || {};
        req.body.location = req.body.location || {};
        mongoDbQuery
            .createUser(req)
            .then(result => res.status(200).json({ successes: 'ok', jobID: result.insertedId }));
    },
    findUser: (req, res, next) => {
        if (!req.params.email) {
            return res.status(403).json({ error: 'Email is mandatory' });
        }
        mongoDbQuery
            .findUser(req)
            .then(user => (user ? res.status(200).json(user) : res.status(404).json({ error: 'user not found' })));
    },
    findUserById: (req, res, next) => {
        if (!req.params.id) {
            return res.status(403).json({ error: 'id is mandatory' });
        }
        mongoDbQuery
            .findUserById(req)
            .then(user => (user ? res.status(200).json(user) : res.status(404).json({ error: 'user not found' })));
    },
    findUsersByIds: (req, res, next) => {
        if (!req.body.array) {
            return res.status(403).json({ error: 'ids is mandatory' });
        }
        mongoDbQuery
            .findUsersByIds(req)
            .then(users => (users ? res.status(200).json(users) : res.status(404).json({ error: 'users not found' })));
    },
    validate: (req, res, next) => {
        if (!req.body.email) {
            return res.status(403).json({ error: 'Email is mandatory' });
        }
        if (!req.body.password) {
            return res.status(403).json({ error: 'Password is mandatory' });
        }
        mongoDbQuery
            .validate(req)
            .then(
                user =>
                    user
                        ? res.status(200).json(user)
                        : res.status(404).json({ error: 'password Or UserName Is Wrong' })
            );
    }
};
