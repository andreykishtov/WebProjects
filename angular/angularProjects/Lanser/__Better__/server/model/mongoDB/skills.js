const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../../helpers/db');

module.exports = {
    createSkill(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('skills');
            })
            .then(skills =>
                skills.insertOne({
                    title: req.body.title
                })
            )
            .then(result => {
                database.close();
                return result;
            })
            .catch(err => console.log(err));
    },
    findSkill(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('skills');
            })
            .then(skills => skills.findOne(ObjectId(req.params.id)))
            .then(skill => {
                database.close();
                return skill;
            })
            .catch(err => console.log(err));
    },
    getAllSkills(req) {
        let database;
        return MongoClient.connect(mongoDbUrl)
            .then(db => {
                database = db;
                return db.collection('skills');
            })
            .then(skills => skills.find().toArray())
            .then(skills => {
                database.close();
                return skills;
            })
            .catch(err => console.log(err));
    }
};
