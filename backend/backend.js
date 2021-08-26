const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const morgan = require('morgan');

const { sequelize } = require('./models');
const checkAuthFields = require('./middleware/checkAuthFields');
const register = require('./controllers/register');
const logout = require('./controllers/logout');
const login = require('./controllers/login');
const handleNotFound = require('./controllers/handleNotFound');
const handleHome = require('./controllers/handleHome');
const parseSessionSecrets = require('./helpers/parseSessionSecrets');

const PORT = process.env.PORT || 4000;
const SESSION_COOKIE = process.env.SESSION_COOKIE || 'user_sid';

const app = express();
const sessionConfig = {
  store: new FileStore(),
  name: SESSION_COOKIE,
  secret: parseSessionSecrets(),
  resave: false,
  saveUninitialized: false,
};
const corsConfig = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
};

app.use(morgan('dev'));
app.use(express.json());
app.use(cors(corsConfig));
app.use(session(sessionConfig));

app.route('/api')
  .get(handleHome)
  .post(checkAuthFields, register);

app.route('/api/session')
  .post(checkAuthFields, login)
  .delete(logout);

app.route('*')
  .get(handleNotFound);

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Backend server listens to ${PORT}`);
  sequelize.authenticate()
    .then(() => console.log('DB connection successful'))
    .catch((error) => console.log('DB connection failed', error));
  /* eslint-enable no-console */
});
