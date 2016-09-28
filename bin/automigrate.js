var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));

var dataSource = app.dataSources.mysql;

['Message', 'User', 'AccessToken', 'ACL', 'RoleMapping', 'Role']
  .forEach(function (model) {
    dataSource.automigrate(model, function (err) {
      if (err) throw err;
      console.log(model + ' model migrated');
    });
  });
