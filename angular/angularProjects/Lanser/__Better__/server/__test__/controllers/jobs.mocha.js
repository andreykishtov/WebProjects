const test = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');

const jobs = require('../../../server/controllers/jobs');
// const { MongoClient, ObjectId } = require('mongodb');
// const mongoDbUrl = require('../../helpers/db');
const { expect } = chai;

chai.use(sinonChai);

let sandbox = null;

describe('shit', () => {
    beforeEach(() => (sandbox = sinon.sandbox.create()));

    afterEach(() => sandbox.restore());
    let req = {};
    let res = {
        json: function() {
            return this;
        },
        status: function() {
            return this;
        }
    };

    it('should behave...', () => {
       sandbox.spy(res, 'status');


       return jobs.getJobs(req, res).then( () =>{
        expect(res.status.callCount).to.equal(1);
        
       });


    });
});
