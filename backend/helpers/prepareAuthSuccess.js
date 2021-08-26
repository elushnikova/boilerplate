const prepareAuthResult = require('./prepareAuthResult');

/**
 * Подготовить тело и статус ответа, сообщающего об успешной авторизации
 * @param {Profile} profile
 * @returns {AuthResponseData}
 */
function prepareAuthSuccess(profile) {
  return [
    prepareAuthResult(null, profile),
  ];
}

module.exports = prepareAuthSuccess;
