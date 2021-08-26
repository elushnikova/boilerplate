/**
 * Возвращает функцию для отправки ответа на запрос аутентификации.
 * @param {*} res Объект ответа.
 * @param {number} defaultStatus Стандартный статус ответа.
 * @returns {function}
 */
function initAuthResponder(res, defaultStatus = 200) {
  /**
   * Отправить ответ на запрос аутентификации.
   * @param {AuthResponseData} authResponseData
   */
  function sendAuthResponse([authResultData, status]) {
    res
      .status(status ?? defaultStatus)
      .json(authResultData);
  }

  return sendAuthResponse;
}

module.exports = initAuthResponder;
