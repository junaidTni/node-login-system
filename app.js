const express = require('express');
const morgan = require('morgan');
const path = require('path');
const env = require('dotenv').config();
const connectDB = require('./config/db');
connectDB();
const session = require('express-session');
const app = express();
var sess = {
    secret: 'CHANGE THIS SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true
};
app.use(session(sess));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/route'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(PORT, `server started on port PORT`));