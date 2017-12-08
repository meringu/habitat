const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

describe('Integrations API', function() {
  describe('Creating an origin integration', function() {
    it('requires authentication');
    it('requires membership in the given origin');
    it('succeeds');
  });

  describe('Retrieving all integrations for an origin', function() {
    it('requires authentication');
    it('requires membership in the given origin');
    it('succeeds');
  });

  describe('Retrieving all names for a specific integration', function() {
    it('requires authentication');
    it('requires membership in the given origin');
    it('succeeds');
  });

  describe('Removing an integration', function() {
    it('requires authentication');
    it('requires membership in the given origin');
    it('succeeds');
  });
});
