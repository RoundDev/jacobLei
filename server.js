//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const api = require('./api/email');
const sq = require('./api/payment');
const port = process.env.PORT || 5000;
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.post('/api/maintemail',api.sendMaintEmail);
app.post('/api/contactemail',api.sendContactEmail);
app.post('/api/noticeemail',api.sendNoticeEmail);
app.post('/api/paymentemail',api.sendPaymentFormEmail);
app.post('/api/sendpayment',sq.sendSquarePayment);
app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port,() => {
  console.log("\x1b[36m%s\x1b[0m",`Listening on port ${port}`)
});
