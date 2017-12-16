const expect = require('chai').expect;
const supertest = require('supertest');
const request = supertest('http://localhost:9636/v1');

// These APIs can't be tested until the projects APIs can be tested, as
// projects are a prerequisite to creating jobs.

describe('Jobs API', function() {
  describe('Scheduling jobs', function() {
    it('requires authentication');
    it('requires that you belong to the origin');
    it('only works for linux');
    it('returns the group');
  });

  describe('Retrieving information about a job group', function() {
    it('return the group');
  });

  describe('Retrieving information about every job group in an origin', function() {
    it('returns all of the groups');
  });

  describe('Listing all jobs for a project', function() {
    it('requires authentication');

    it('requires membership in the origin that the project refers to');

    it('succeeds');
  });

  describe('Getting details of a job', function() {
    it('requires authentication');
    it('requires you are a member of the origin that the job belongs to');
  });

  describe('Getting logs of a job', function() {
    it('requires authentication');
    it('requires you are a member of the origin that the job belongs to');
  });

  describe('Promoting a job group', function() {
    it('requires authentication');
    it('requires you are a member of the origin that the job group belongs to');
    it('promotes every build in the group to the specified channel');
  });

  describe('Aborting a job group', function() {
    it('requires authentication');
    it('succeeds');
    it('removes the job group');
  });

  describe('Canceling a job group', function() {
    it('requires authentication');
    it('requires you are a member of the origin that the job group belongs to');
    it('cancels the group and all of its jobs');
  });
});
