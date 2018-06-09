//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('/dist/jacob-lei'));

app.get('/*all', function(req,res) {

  res.sendFile(path.join('/dist/jacob-lei/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5000);
