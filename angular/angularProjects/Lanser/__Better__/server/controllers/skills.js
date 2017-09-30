const mongoDbQuery = require('../model/mongoDB/skills');

module.exports = {
    createSkill: (req, res, next) => {
        if (!req.body.title) {
            throw res.status(403).json({ error: 'Title is mandatory' });
        }
        mongoDbQuery
            .createSkill(req)
            .then(result => res.status(200).json({ successes: 'ok', skillID: result.insertedId }));
    },
    findSkill: (req, res, next) => {
        if (!req.params.id) {
            return res.status(403).json({ error: 'Id is mandatory' });
        }
        mongoDbQuery
            .findSkill(req)
            .then(skill => (skill ? res.status(200).json(skill) : res.status(404).json({ error: 'Skill not found' })));
    },
    getAllSkills: (req, res, next) => {
        mongoDbQuery.getAllSkills().then(skills => res.status(200).json(skills));
    }
};
