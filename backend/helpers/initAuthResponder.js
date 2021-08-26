/**
 * Возвращает функцию для отправки ответа на запрос аутентификации.
 * @param {*} res Объект ответа.
 * @param {number} defaultStatus Стандартный статус ответа.
 * @returns {function} Функция для отправки ответа.
 */
function initAuthResponder(res, defaultStatus = 200) {
  /**
   * Отправить ответ на запрос аутентификации.
   * @param {AuthResponseData} authResponseData
   */
  function sendAuthResponse([authResult, status]) {
    res
      .status(status ?? defaultStatus)
      .json(authResult);
  }

  return sendAuthResponse;
}

module.exports = initAuthResponder;
