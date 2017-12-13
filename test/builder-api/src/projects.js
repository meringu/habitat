const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

describe('Projects API', function() {
  describe('Creating a project', function() {
    it('requires authentication', function(done) {
      request.post('/projects')
        .type('application/json')
        .accept('application/json')
        .send({
          origin: 'neurosis',
          plan_path: 'plan.sh',
          installation_id: 0,     // this value and the one below it need to change
          repo_id: 0
        })
        .expect(401)
        .end(function(err, res) {
          expect(res.text).to.be.empty;
          done(err);
        });
    });

    it('requires membership in the origin that the project refers to', function(done) {
      request.post('/projects')
        .set('Authorization', global.mystiqueBearer)
        .type('application/json')
        .accept('application/json')
        .expect(401)
        .end(function(err, res) {
          expect(res.text).to.be.empty;
          done(err);
        });
    });

    it('succeeds');
  });

  describe('Retrieving a project', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Listing all projects in an origin', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Listing all jobs for a project', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Editing a project', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');

    it('reflects the new changes when viewing it again');
  });

  describe('Toggling the privacy of a project', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Deleting a project', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });
});

describe('Project integrations API', function() {
  describe('Creating a project integration', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Retrieving a project integration', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Deleting a project integration', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });
});
