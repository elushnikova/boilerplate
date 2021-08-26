const checkPasswordMatch = require('../helpers/checkPasswordMatch');
const compareUser = require('../helpers/compareUser');
const initAuthResponder = require('../helpers/initAuthResponder');
const initSessionCreator = require('../helpers/initSessionCreator');
const prepareAuthError = require('../helpers/prepareAuthError');
const prepareAuthSuccess = require('../helpers/prepareAuthSuccess');
const prepareLoginData = require('../helpers/prepareLoginData');
const prepareUserProfile = require('../helpers/prepareUserProfile');

/**
 * Контроллер логина.
 * Создаёт сессию при успешном входе. Отправляет профиль пользователя на клиент.
 */
function login(req, res) {
  const createSession = initSessionCreator(req);
  const sendLoginResponse = initAuthResponder(res);

  prepareLoginData(req.body.email, req.body.password)
    .then(compareUser)
    .then(checkPasswordMatch)
    .then(prepareUserProfile)
    .then(prepareAuthSuccess)
    .catch(prepareAuthError)
    .then(createSession)
    .then(sendLoginResponse);
}

module.exports = login;
