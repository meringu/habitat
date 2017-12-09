const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

describe('Miscellanenous API', function() {
  describe('Retrieving the API status', function() {
    it('succeeds', function(done) {
      request.get('/status')
        .type('application/json')
        .accept('application/json')
        .expect(200)
        .end(function(err, res) {
          expect(res.text).to.be.empty;
          done(err);
        });
    });
  });

  describe('Authenticating with GitHub', function() {
    it('succeeds');
  });

  describe('Receiving a GitHub webhook', function() {
    it('succeeds');
  });

  describe('Retrieving reverse dependencies', function() {
    it('returns all reverse dependencies for an origin and package name');
  });
});
