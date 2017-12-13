const jwt = require('jwt-builder');
const request = require('superagent');
const fs = require('fs');

const key = fs.readFileSync('/root/key-dir/builder-github-app.pem');

let token = jwt({
  algorithm: 'RS256',
  privateKey: key,
  iat: true,
  exp: 600,
  iss: 5629
});

request
  .get('https://api.github.com/app')
  .set('Accept', 'application/vnd.github.machine-man-preview+json')
  .set('Authorization', `Bearer ${token}`)
  .end((err, res) => {
    console.log('response');
    console.log(res.body);
  });
