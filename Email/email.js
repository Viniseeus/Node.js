var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vinizin@gmail.com',
    pass: '1234bobioulevounosaco'
  }
});

var mailOptions = {
  from: 'paty011@gmail.com',
  to: 'paty011@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'Você é menina mesmo ?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 