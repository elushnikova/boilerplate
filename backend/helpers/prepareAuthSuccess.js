/**
 * Подготовить тело и статус ответа, сообщающего об успешной авторизации
 * @param {Profile} profile
 * @returns {AuthResponseData}
 */
function prepareAuthSuccess(profile) {
  return [{ ok: true, profile }];
}

module.exports = prepareAuthSuccess;
