//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const squareConnect = require('square-connect');
const app = express();
const config = require('dotenv').config();

const api = require('./api/email');
const sq = require('./api/payment')

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.post('/api/maintemail',api.sendMaintEmail);
app.post('/api/contactemail',api.sendContactEmail);
app.post('/api/noticeemail',api.sendNoticeEmail);
app.post('/sq/sendpayment',sq.sendSquarePayment);
app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
// Set Square Connect credentials
var defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = config.SQUARE_TOKEN_TEST;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
