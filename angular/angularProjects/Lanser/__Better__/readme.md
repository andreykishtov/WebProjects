# Lanser Doc


## Server
```

```


### Jobs Rest api
```
http://Url:port/api

/ get Gives a json of all jobs available.
/ post Creates new Job with json send in body. date creates automatically
json: {
                    title: "",
                    publisher: "",
                    skills: "",
                    description: "",
                    location: {
                        lat: "",
                        lng: ""
                    }

/apply post takes a json in body and add to allReady existent Job
json: {
        job_id:"",
        applicant_id
}
/unapply post takes a json in body and unapplied to allReady existent Job
json: {
        job_id:"",
        applicant_id
}
/:email get request with email address that finds a job by email of user

/:id get request with job id that finds a job by job id 

/:id removes job by job id

/aplicant/:id finds a job by user that applied to that job 

/applicants/:id gives an array of user ids that applied to that job by job id
```

### User Rest api
```
/post create user by json
json {
                    name: {
                        first: "",
                        last: ""
                    },
                    location: {
                        lng: "",
                        lat: ""
                    },
                    email: "",
                    password: "",
                    description: {
                        public: "",
                        private: ""
                    }
                };

/validate post sends password and email address
json {
    
}
router.route('/validate').post(UserController.validate);
router.route('/:email').get(UserController.findUser);
router.route('/id/:id').get(UserController.findUserById);
router.route('/usersByIds').post(UserController.findUsersByIds);
```