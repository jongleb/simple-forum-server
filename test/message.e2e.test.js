var assert = require('assert');
var superagent = require('superagent');
var server = require('../server/server');
var status = require('http-status');


describe('/message', () => {

  before(()=> {
    server.start()
  });

  it('get message list', done => {
    superagent.get('http://localhost:3000/api/messages')
      .end(function (err, res) {
        assert(res.status === 200);
        assert(Array.isArray(res.body));
        done();
      })
  });

  it('can create only auth user', done=> {
    superagent
      .post('http://localhost:3000/api/messages')
      .set('Content-Type', 'application/json')
      .send({header: 'baz', body: 'bar'})
      .end(function (err, res) {
        assert(res.status === 401);
        done();
      })
  });

});
