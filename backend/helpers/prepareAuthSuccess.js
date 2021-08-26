const prepareAuthResult = require('./prepareAuthResult');

/**
 * Подготовить тело и статус ответа, сообщающего об успешной авторизации.
 * @param {Profile} profile Объект профиля для хранения на клиенте.
 * @returns {AuthResponseData} Данные ответа на запрос аутентификации.
 */
function prepareAuthSuccess(profile) {
  return [
    prepareAuthResult(null, profile),
  ];
}

module.exports = prepareAuthSuccess;
