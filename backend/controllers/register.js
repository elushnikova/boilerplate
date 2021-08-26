const prepareUserData = require('../helpers/prepareUserData');
const createUser = require('../helpers/createUser');
const prepareUserProfile = require('../helpers/prepareUserProfile');
const prepareAuthSuccess = require('../helpers/prepareAuthSuccess');
const prepareAuthError = require('../helpers/prepareAuthError');
const initSessionCreator = require('../helpers/initSessionCreator');
const initAuthResponder = require('../helpers/initAuthResponder');

/**
 * Контроллер регистрации.
 * Создаёт пользователя в БД и сессию. Отправляет профиль пользователя на клиент.
 */
function register(req, res) {
  const createSession = initSessionCreator(req);
  const sendRegisterResponse = initAuthResponder(res, 201);

  prepareUserData(req.body.email, req.body.password)
    .then(createUser)
    .then(prepareUserProfile)
    .then(prepareAuthSuccess)
    .catch(prepareAuthError)
    .then(createSession)
    .then(sendRegisterResponse);
}

module.exports = register;
