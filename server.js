require('dotenv').config();

const express = require('express');
const { join } = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();

const sequelize = require('./config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict'
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
}));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// need to comment this out if we're going to rebuild models
// then set sync to true
// run it
// stop server
// then set to false and uncomment controllers
// call jeff if things happen bad
app.use(require('./controllers'));

sequelize.sync({ force: true })
  .then(() => app.listen(3001))
  .catch(err => console.error(err));