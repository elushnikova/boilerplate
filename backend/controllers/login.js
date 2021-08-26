const checkPasswordMatch = require('../helpers/checkPasswordMatch');
const compareUser = require('../helpers/compareUser');
const prepareAuthError = require('../helpers/prepareAuthError');
const prepareAuthSuccess = require('../helpers/prepareAuthSuccess');
const prepareLoginData = require('../helpers/prepareLoginData');
const prepareUserProfile = require('../helpers/prepareUserProfile');

/** Контроллер для логина. */
function login(req, res) {
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
   * Отправить ответ на запрос логина.
   * @param {AuthResponseData} authResponseData
   */
  function sendLoginResponse([authResultData, status]) {
    res
      .status(status ?? 200)
      .json(authResultData);
  }

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
