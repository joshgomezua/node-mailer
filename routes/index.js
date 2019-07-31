var express = require('express');
const querystring = require('querystring');
var router = express.Router();
var nodemailer = require('nodemailer');


var queryBody = "";

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("hello");
  
  console.log('====>: ' + JSON.stringify(req.query));

  queryBody = JSON.stringify(req.query);

  res.send("good");
  //res.redirect('https://www.carecreditguru.com/thanks/thanks.php' + req.params);

});


/*
var transporter = nodemailer.createTransport({
  service: 'carecreditguru.com',
  auth: {
    user: 'admin@carecreditguru.com',
    pass: 'IMan@#@!12'
  }
}); 
*/

var smtpConfig = {
  host: 'carecreditguru.com',
  port: 587,
  SSL: true,
  auth: {
      user: 'user@myDomain.com',
      pass: 'pass@pass'
  }
};
var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
  from: 'adam@carecreditguru.com',
  to: 'tony@carecreditguru.com',
  subject: 'New Lead',
  text: queryBody
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


module.exports = router;
