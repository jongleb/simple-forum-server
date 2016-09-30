var path = require('path');
var assert = require('assert');
var app = require(path.resolve(__dirname, '../server/server'));


describe('Messages ', function () {

  before(()=> {
    app.models.Message.destroyById(1);
  });

  let message = {
    header: 'hello',
    body: 'world',
    id: 1
  };

  it('create message', function (done) {
    app.models.Message.create(message,
      (err, model)=> {
        if (err) throw err;
        assert(model.id === 1);
        done();
      });
  });

  it('find message', function (done) {
    app.models.Message.findById(1, {},
      (err, instance)=> {
        assert(instance.id === 1);
        done();
      });
  });

});
