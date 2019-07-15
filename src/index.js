const express        = require('express');
const bodyParser     = require('body-parser');
const cors           = require('cors');
const app            = express();
const db             = require('./db');
const port = 8011;

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
require('./routes')(app, db);
app.listen(port, () => {
    console.log('We are live on ' + port);
});
