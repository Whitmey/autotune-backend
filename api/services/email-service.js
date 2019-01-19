'use strict';
const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,  //true for 465 port, false for other ports
  auth: {
    user: 'autotune@zoho.com',
    pass: '!Jasper5'
  }
});

exports.sendAlgoMail = function(req, data){

  const mailOptions = {
    from: '"AutoTune App" <autotune@zoho.com>', // sender address
    to: 'w.whitmey@outlook.com', // list of receivers
    subject: 'AutoTune Algo Run', // Subject line
    html: data // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send({success: false})
    } else {
      res.status(200).send({success: true});
    }
  });

}

exports.sendFeedbackMail = function(req){

  const mailOptions = {
    from: '"AutoTune App" <autotune@zoho.com>', // sender address
    to: 'w.whitmey@outlook.com', // list of receivers
    subject: 'AutoTune Feedback', // Subject line
    html: req.body.content // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(400).send({success: false})
    } else {
      res.status(200).send({success: true});
    }
  });

}
