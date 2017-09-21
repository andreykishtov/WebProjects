const test = require('ava');
const sinon = require('sinon');
const jobs = require('../../../server/controllers/jobs');
const { MongoClient, ObjectId } = require('mongodb');
const mongoDbUrl = require('../../helpers/db');

let sandbox = null;


test.beforeEach(t => {
    sandbox = sinon.sandbox.create();
});

test.afterEach(t => {
    sandbox.restore();
});


test('This should pass', async (t) => {
    let req = {

    };
    let res ={
        json:function () {
            return this;
        },
        status: function () {
            return this;
        }
    }

    sandbox.spy(res,'status');

     await jobs.getJobs(req, res)
     t.is(res.status.callCount, 1);
    
     

   
});