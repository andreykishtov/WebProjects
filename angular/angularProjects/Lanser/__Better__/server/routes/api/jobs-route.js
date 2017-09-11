const express = require("express");
const router = express.Router();
const passport = require("passport");
/* GET users listing. */
const controller = require("../../controllers/jobs-controller");

router.get("/", controller.getAllJob);
router.get("/skills", controller.getAllSkills);
router.post("/apply", controller.applyToJob);
router.get("/skills/jobs", controller.getSkillsforJobs);
router.get("/job/", passport.authenticate("jwt", { session: false }), function(req, res) {
    res.json("this is secret");
});

module.exports = router;
