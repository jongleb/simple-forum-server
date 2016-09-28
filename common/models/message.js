'use strict';

module.exports = function (Message) {
  Message.beforeRemote('create', function(context, user, next) {
    context.args.data.user_id = context.req.accessToken.userId;
    next();
  });
};
