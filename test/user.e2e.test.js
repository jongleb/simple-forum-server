var assert = require('assert');
var superagent = require('superagent');
var server = require('../server/server');
var status = require('http-status');


describe('/user', function () {

  function getRandString() {
    return Math.random().toString(36).substring(7);
  }

  let user = {
      username: getRandString(),
      password: getRandString(),
      email: `${getRandString()}@mail.ru`
    },
    token = null,
    api = 'http://localhost:3000/api/users';

  it('login user', done=> {
    superagent
      .post(api)
      .set('Content-Type', 'application/json')
      .send(user)
      .end(function (err, res) {
        assert(res.status === 200);
        assert(res.body.username === user.username);
        done();
      })
  });

  it('login user', done=> {
    superagent
      .post(`${api}/login`)
      .set('Content-Type', 'application/json')
      .send(user)
      .end(function (err, res) {
        assert(res.status === 200);
        assert(res.body.id !== undefined);
        assert(res.body.ttl !== undefined);
        token = res.body.id;
        done();
      })
  });

  it('logout user', done=> {
    superagent
      .post(`${api}/logout?access_token=${token}`)
      .send(user)
      .end(function (err, res) {
        assert(res.status === 204);
        done();
      })
  });


});
