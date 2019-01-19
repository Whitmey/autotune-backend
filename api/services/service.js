'use strict';
const shell = require('shelljs');
const fs = require('fs');
const parser = require('./parser-service');
const fileWriter = require('./file-writer');
const emailService = require('./email-service');
const validationService = require('./validation-service');

exports.run_algorithm = function(req, res) {

  fileWriter.generateCurrentSettingsFiles(req.body.currentSettings);

  let shellArgs = validationService.validate(req);

  console.log(shellArgs);

  shell.exec(`oref0-autotune --dir=${__basedir}/myopenaps --ns-host=${shellArgs.url} --start-date=${shellArgs.startDate} --end-date=${shellArgs.endDate} `)

  fs.readFile(`${__basedir}/myopenaps/autotune/autotune_recommendations.log`, 'utf8', function(err, data) {
    emailService.sendAlgoMail(req, data);
    res.send(parser.parse(data))
  });

  shell.exec(`rm -rf ${__basedir}/myopenaps/autotune`);

}

exports.submit_feedback = function(req, res) {
  emailService.sendFeedbackMail(req)
  res.sendStatus(200);
}
