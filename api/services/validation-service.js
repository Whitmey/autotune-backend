function validateShellArgument(arg) {
  return '"' + arg.replace(/(["\s'$`\\])/g,'\\$1')+'"';
};

function validate(req) {
  return {
    url: validateShellArgument(req.body.url),
    startDate: validateShellArgument(req.body.startDate),
    endDate: validateShellArgument(req.body.endDate)
  }
}

module.exports.validate = validate;
