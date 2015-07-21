'use strict';

module.exports = function(app) {
    var categories = require('../../app/controllers/categories.server.controller');

    app.route('/categories')
      .get(categories.list)
      .post(categories.create);

    // the categoryId param is added to the params object for the request
   app.route('/categories/:categoryId')
    .get(categories.read)
    .put(categories.update)
    .delete(categories.delete);
};