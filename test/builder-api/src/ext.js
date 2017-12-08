const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

describe('External API', function() {
  describe('Getting the external code', function() {
    it('requires authentication');
    it('succeeds');
  });

  describe('Getting the external repo content', function() {
    it('requires authentication');
    it('succeeds');
  });

  describe('Validate credentials in an external registry', function() {
    it('requires authentication');
    it('succeeds');
  });
});
