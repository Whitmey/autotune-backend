'use strict';
const nodeMailer = require('nodemailer');

exports.sendMail = function(req, json){

  const transporter = nodeMailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,  //true for 465 port, false for other ports
    auth: {
      user: 'autotune@zoho.com',
      pass: '!Jasper5'
    }
  });

  const mailOptions = {
    from: '"AutoTune App" <autotune@zoho.com>', // sender address
    to: 'w.whitmey@outlook.com', // list of receivers
    subject: 'Algorithm Run', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
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
