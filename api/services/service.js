'use strict';
const shell = require('shelljs');

exports.run_algorithm = function(req, res) {
  shell.exec('oref0-autotune --dir=~/myopenaps --ns-host=https:william-cgm.herokuapp.com --start-date=YYYY-MM-DD');
  res.sendStatus(200);
}

exports.submit_feedback = function(req, res) {
  res.sendStatus(200);
}
