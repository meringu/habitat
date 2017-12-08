const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

describe('Keys API', function() {
  describe('Public keys', function() {
    describe('Uploading', function() {
      it('requires authentication');
      it('requires membership in the origin you are uploading to');
      it('uploads the key');
    });

    describe('Generating keys', function() {
      it('requires authentication');
      it('requires membership in the origin you are uploading to');
      it('generates the key');
    });

    describe('Downloading keys', function() {
      it('can list all public keys');
      it('can download the latest key');
      it('can download a specific revision');
    });
  });

  describe('Secret keys', function() {
    describe('Uploading', function() {
      it('requires authentication');
      it('requires membership in the origin you are uploading to');
      it('uploads the key');
    });

    describe('Downloading keys', function() {
      it('can download the latest key');
    });
  });

  describe('Builder keys', function() {
    it('can retrieve the latest key');
  });
});
