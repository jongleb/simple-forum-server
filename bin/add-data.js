var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));

var users = [
  {
    "username": "adminer",
    "password": "12345",
    "email": "adminer@mail.ru"
  },
  {
    "username": "random",
    "password": "12345",
    "email": "random@mail.ru"
  }
];

users.forEach(function (user) {
  app.models.User.create(user, function (err, model) {
    if (err) throw err;
    console.log('Created:', model);
  });
});
