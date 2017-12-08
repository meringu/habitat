const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

describe('Profile API', function() {
  describe('Updating the profile', function() {
    it('requires authentication');
    it('only allows someone to update their own profile');
  });

  describe('Retrieving a profile', function() {
    it('requires authentication');
    it('only allows someone to retrieve their own profile');
  });
});
