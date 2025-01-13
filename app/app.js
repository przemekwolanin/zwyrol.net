const express = require('express');
const app = express();
const path = require('path');
const expressEjsLayouts = require('express-ejs-layouts');

// init database
require('./db/mongoose');

app.set('view engine','ejs');
app.use(expressEjsLayouts);
app.set('views',path.join(__dirname + '/../views'));
app.set('layout', 'layouts/main');

app.use(express.static('public'));

// body parser -- application/x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// middleware

app.use('/',require('./middleware/view-variables'));

// mount reoutes
app.use(require('./routes/web'));

module.exports = app;