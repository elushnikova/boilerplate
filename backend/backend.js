const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const { sequelize, User } = require('./models');

const PORT = process.env.PORT || 4000;
const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
const SESSION_SECRET = process.env.SESSION_SECRET || 'foo';
const SESSION_COOKIE = 'user_sid';

const app = express();
const sessionConfig = {
  store: new FileStore(),
  name: SESSION_COOKIE,
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

app.use(express.json());
app.use(session(sessionConfig));

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world' });
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    res
      .status(409)
      .json({ message: 'Email must be non-empty', email });
  }

  if (!password) {
    res
      .status(409)
      .json({ message: 'Password must be non-empty', password });
    return;
  }

  bcrypt.hash(password, SALT_ROUNDS)
    .then((hash) => User.create({ email, password: hash }))
    .then((user) => ({ id: user.id, email: user.email }))
    .then((profile) => {
      req.session.profile = profile;
      res.json({ ok: true, profile });
    })
    .catch((error) => {
      switch (error.name) {
        case 'SequelizeUniqueConstraintError':
          return res
            .status(409)
            .json({ ok: false, message: 'Email already registered', email: error.fields.email });

        default:
          return res
            .status(500)
            .json(error);
      }
    });
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res
    .clearCookie(SESSION_COOKIE)
    .json({ ok: true });
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Backend server listens to ${PORT}`);
  sequelize.authenticate()
    .then(() => console.log('DB connection successful'))
    .catch((error) => console.log('DB connection failed', error));
  /* eslint-enable no-console */
});
