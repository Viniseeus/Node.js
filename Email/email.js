var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vinizius@gmail.com',
    pass: '123vini'
  }
});

var mailOptions = {
  from: 'joao@gmail.com',
  to: 'joaovitor@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'Eai, tudo certo ?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 