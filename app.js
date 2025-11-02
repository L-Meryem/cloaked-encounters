const connectToMongo = require('./src/config/db');
connectToMongo();
const express = require('express');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');

app.use(session({
    secret: 'cH]mH-)7Tvh^487',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/auth', require('./src/routes/auth'));
app.use('/', require('./src/routes/routes'));

const PORT = 8080;
app.listen(PORT, ()=>console.log(`Server listening on ${PORT}`));