'use strict';
const shell = require('shelljs');
const fs = require('fs');
const parser = require('./parser-service');
const fileWriter = require('./file-writer');
const emailService = require('./email-service');

exports.run_algorithm = function(req, res) {

  fileWriter.generateCurrentSettingsFiles(req.body.currentSettings);

  shell.exec(`oref0-autotune --dir=${__basedir}/myopenaps --ns-host=${req.body.url} --start-date=2018-12-31 --end-date=2019-01-01 `)

  fs.readFile(`${__basedir}/myopenaps/autotune/autotune_recommendations.log`, 'utf8', function(err, data) {
    emailService.sendMail(req, data);
    res.send(parser.parse(data))
  });

  shell.exec(`rm -rf ${__basedir}/myopenaps/autotune`);

}

exports.submit_feedback = function(req, res) {
  res.sendStatus(200);
}
