const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const morgan = require('morgan');

const { sequelize } = require('./models');
const checkAuthFields = require('./middleware/checkAuthFields');
const register = require('./controllers/register');
const logout = require('./controllers/logout');
const login = require('./controllers/login');

const PORT = process.env.PORT || 4000;
const SESSION_SECRET = process.env.SESSION_SECRET || 'foo';
const SESSION_COOKIE = process.env.SESSION_COOKIE || 'user_sid';

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
app
  .route('/session')
  .post(checkAuthFields, login)
  .delete(logout);

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
