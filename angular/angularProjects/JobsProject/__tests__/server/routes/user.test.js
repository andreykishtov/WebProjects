const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const { expect } = chai;
const MongoClient = require('mongodb').MongoClient;
const { MONGO_URL_TEST } = require('../../../server/helpers/constants');
const server = require('../../../server/app');

chai.use(chaiHttp);

describe('User route', () => {
  const userApi = '/api/user/';
  let savedUser;
  let user = {
    email: faker.internet.email(),
    password: faker.internet.password(),
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName()
    }
  };

  // after('dropping test db', done => {
  //   MongoClient.connect(MONGO_URL_TEST, function(err, db) {
  //     if (err) throw err;
  //     db.dropDatabase();
  //     console.log('\nDB was dropped');
  //     done();
  //   });
  // });

  describe('Create user', () => {
    it('should create user with given params', done => {
      chai
        .request(server)
        .post(userApi)
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body)
            .to.have.property('successes')
            .and.equal('ok');
          savedUser = user;
          done();
        });
    });

    it('should return error if email in use', done => {
      chai
        .request(server)
        .post(userApi)
        .send(savedUser)
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body)
            .to.have.property('error')
            .and.equal('shit... we have this user already');
          done();
        });
    });
    it('should return error 403 if email in not in req.body', done => {
      chai
        .request(server)
        .post(userApi)
        .send({password: faker.internet.password()})
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body)
            .to.have.property('error')
            .and.equal('fuck off need email');
          done();
        });
    });

    it('should return error 403 if password in not in req.body', done => {
      chai
        .request(server)
        .post(userApi)
        .send({email:faker.internet.email(), pass:faker.name.findName()})
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body)
            .to.have.property('error')
            .and.equal('fuck off need password');
          done();
        });
    });

    it('should return error 403 if name in not in req.body', done => {
      chai
        .request(server)
        .post(userApi)
        .send({email:faker.internet.email(), password: faker.internet.password()})
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body)
            .to.have.property('error')
            .and.equal('fuck off need name');
          done();
        });
    });
  });

  describe('Find user', () => {
    it('should return user if it in the database', done => {
      chai
        .request(server)
        .get(userApi + savedUser.email)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body)
            .to.have.property('successes')
            .and.equal('ok');
          done();
        });
    });
    it('should return 404 if user not found', done => {
      const randomUser = faker.internet.email();
      chai
        .request(server)
        .get(userApi + randomUser)
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body)
            .to.have.property('error')
            .and.equal('WOOOTTT!!! User not found');
          done();
        });
    });

  });
});
