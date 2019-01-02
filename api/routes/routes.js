'use strict';
module.exports = function(app) {
  var service = require('../services/service');

  app.route('/algorithm/run')
    .post(service.run_algorithm);

  app.route('/feedback')
    .post(service.submit_feedback)

};
