const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');

const { sequelize, User } = require('./models');
const checkAuthFields = require('./middleware/checkAuthFields');
const register = require('./controllers/register');

const PORT = process.env.PORT || 4000;
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

app.use(morgan('dev'));
app.use(express.json());
app.use(session(sessionConfig));

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world' });
});

app.post('/register', checkAuthFields, register);

app.get('/logout', (req, res) => {
  req.session.destroy();
  res
    .clearCookie(SESSION_COOKIE)
    .json({ ok: true });
});

app.post('/login', checkAuthFields, (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) throw new Error('User not found');

      return Promise.all([
        Promise.resolve(user),
        bcrypt.compare(password, user.password),
      ]);
    })
    .then(([user, isMatch]) => (
      isMatch
        ? res.json({ ok: true, profile: { id: user.id, email: user.email } })
        : res.status(401).json({ ok: false, message: 'Invalid email or password' })
    ))
    .catch(() => {
      res.status(401).json({ ok: false, message: 'Invalid email or password' });
    });
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
