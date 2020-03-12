const express = require('express')
  , app = express()
  , router = express.Router()
  , bodyParser = require('body-parser')
  , argv = require('minimist')(process.argv.splice(2))
  , _ = require('lodash')
  , path = require('path')
  , serveIndex = require('serve-index');

const PORT = argv.port || 3001;

// static file hosting
app.use(express.static(path.join(__dirname, 'public')));
app.use(serveIndex(path.join(__dirname, 'public')));

// const vad = require('./voice-activity-detection');

app.use('/vad/:file', require('./voice-activity-detection'))
app.use('/', router);

// pase application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// listen to app
app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}!`)
})