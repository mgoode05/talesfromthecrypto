const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();


app.use(logger('dev'));
//Serve favicon & static middles serve from the build folder
app.use(express.static(path.join(__dirname, 'build')));
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

require('dotenv').config();
require('./config/database');

app.use(bodyParser.json());
app.use(require('./config/auth'));

//API Routes
app.use('/api/users', require('./routes/api/api'));
app.use('/api/watchlist', require('./routes/api/watchlist'));

//"Catch All" Route-Client Side Routing
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});

