const job =  require('../querys/job-querys');

module.exports  = {
    getAllJob: (req, res, next) => {
        job.getAllJob((result) => res.json(result));
    },

    getSkillsforJobs:(req, res, next) => {
        job.getSkillsforJobs((result) => res.json(result));
    },

    getAllSkills:(req, res, next) => {
        job.getAllSkills((result) => res.json(result));
    }
}