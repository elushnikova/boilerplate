const prepareUserData = require('../helpers/prepareUserData');
const createUser = require('../helpers/createUser');
const prepareUserProfile = require('../helpers/prepareUserProfile');
const prepareAuthSuccess = require('../helpers/prepareAuthSuccess');
const prepareAuthError = require('../helpers/prepareAuthError');

/** Контроллер для регистрации. */
function register(req, res) {
  /**
   * Создать пользовательскую сессию при успешной аутентификации.
   * @param {AuthResponseData} authResponseData
   * @returns {AuthResponseData}
   */
  function createSession(authResponseData) {
    const [authResultData] = authResponseData;

    if (authResultData.ok) {
      req.session.profile = authResultData.profile;
    }

    return authResponseData;
  }

  /**
   * Отправить ответ на запрос регистрации.
   * @param {AuthResponseData} authResponseData
   */
  function sendRegisterResponse([authResultData, status]) {
    res
      .status(status ?? 201)
      .json(authResultData);
  }

  prepareUserData(req.body.email, req.body.password)
    .then(createUser)
    .then(prepareUserProfile)
    .then(prepareAuthSuccess)
    .catch(prepareAuthError)
    .then(createSession)
    .then(sendRegisterResponse);
}

module.exports = register;
