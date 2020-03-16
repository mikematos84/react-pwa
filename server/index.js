const express = require('express')
  , app = express()
  , router = express.Router()
  , bodyParser = require('body-parser')
  , argv = require('minimist')(process.argv.splice(2))
  , _ = require('lodash')
  , path = require('path')
  , serveIndex = require('serve-index')
  , cors = require('cors');

const PORT = argv.port || 3001;

// cors
app.use(cors());

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


// static file hosting
app.use(express.static(path.join(__dirname, 'public')));

app.use('/save', require('./save'))
// app.use('/vad/:file', require('./voice-activity-detection'))
app.use('/vad/:type/:file', require('./voice-activity-detection'))
app.use('/', router);


// listen to app
app.listen(PORT, () => {
  console.log(`Express App listening on port ${PORT}!`)
})