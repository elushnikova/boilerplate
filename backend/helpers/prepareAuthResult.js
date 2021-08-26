/**
 * Создать объект с результатом аутентификации для отправки клиенту в JSON-формате.
 * @param {Profile} profile
 * @returns {AuthResult}
 * @todo Убрать поле `email`, отправлять объект ошибки напрямую.
 */
function prepareAuthResult(error, profile) {
  return error
    ? { ok: false, message: error.message, email: error.email }
    : { ok: true, profile };
}

module.exports = prepareAuthResult;
