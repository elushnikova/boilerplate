/**
 * Возвращает функцию для создания пользовательской сессии по запросу аутентификации.
 * @param {*} req Объект запроса.
 * @returns {function}
 */
function initSessionCreator(req) {
  /**
   * Создать пользовательскую сессию при успешной аутентификации.
   * @param {AuthResponseData} authResponseData
   * @returns {AuthResponseData}
   */
  function createSession(authResponseData) {
    const [authResult] = authResponseData;

    if (authResult.ok) {
      req.session.profile = authResult.profile;
    }

    return authResponseData;
  }

  return createSession;
}

module.exports = initSessionCreator;
