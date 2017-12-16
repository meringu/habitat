const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

// These values correspond to the private-test repo in the habitat-sh org
const installationId = 56940;
const repoId = 105209810;
const projectCreatePayload = {
  origin: 'neurosis',
  plan_path: 'plan.sh',
  installation_id: installationId,
  repo_id: repoId
};

describe('Projects API', function() {
  describe('Creating a project', function() {
    it('requires authentication', function(done) {
      request.post('/projects')
        .type('application/json')
        .accept('application/json')
        .send(projectCreatePayload)
        .expect(401)
        .end(function(err, res) {
          expect(res.text).to.be.empty;
          done(err);
        });
    });

    it('requires membership in the origin that the project refers to', function(done) {
      request.post('/projects')
        .type('application/json')
        .accept('application/json')
        .set('Authorization', global.mystiqueBearer)
        .send(projectCreatePayload)
        .expect(403)
        .end(function(err, res) {
          expect(res.text).to.be.empty;
          done(err);
        });
    });

    it('requires a properly formatted payload', function(done) {
      request.post('/projects')
        .type('application/json')
        .accept('application/json')
        .set('Authorization', global.boboBearer)
        .send({
          haha: 'lulz'
        })
        .expect(422)
        .end(function(err, res) {
          expect(res.text).to.be.empty;
          done(err);
        });
    });

    it('succeeds', function(done) {
      request.post('/projects')
        .type('application/json')
        .accept('application/json')
        .set('Authorization', global.boboBearer)
        .send(projectCreatePayload)
        .expect(201)
        .end(function(err, res) {
          // console.log('-------------------------------');
          // console.log(res.text);
          // console.log('-------------------------------');
          expect(res.body.id).to.not.be.empty;
          expect(res.body.origin_id).to.equal(global.originNeurosis.id.toString());
          expect(res.body.origin_name).to.equal('neurosis');
          expect(res.body.package_name).to.equal('redis');
          expect(res.body.name).to.equal('neurosis/redis');
          expect(res.body.plan_path).to.equal('plan.sh');
          expect(res.body.owner_id).to.equal(global.sessionBobo.id);
          expect(res.body.vcs_type).to.equal('git');
          expect(res.body.vcs_data).to.equal('https://github.com/habitat-sh/private-test.git')
          expect(res.body.vcs_installation_id).to.equal(installationId.toString());
          expect(res.body.visibility).to.equal('public');
          done(err);
        });
    });
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
