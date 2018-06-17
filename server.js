//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const api = require('./api/email');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.post('/api/maintemail',api.sendMaintEmail);
app.post('/api/contactemail',api.sendContactEmail);
app.post('/api/noticeemail',api.sendNoticeEmail);

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
