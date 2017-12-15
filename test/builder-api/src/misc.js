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

  // This test suffers from the same issue outlined in projects.js
  describe('Authenticating with GitHub', function() {
    it('succeeds');
  });

  describe('Receiving a GitHub webhook', function() {
    it('succeeds');
  });

  // This isn't the greatest test because our testapp doesn't have any
  // dependencies :(
  describe('Retrieving reverse dependencies', function() {
    it('returns all reverse dependencies for an origin and package name', function(done) {
      request.get('/rdeps/neurosis/testapp')
        .type('application/json')
        .accept('application/json')
        .expect(200)
        .end(function(err, res) {
          expect(res.body.origin).to.equal('neurosis');
          expect(res.body.name).to.equal('testapp');
          expect(res.body.rdeps).to.deep.equal([]);
          done(err);
        });
    });
  });
});
