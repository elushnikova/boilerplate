const AppError = require('./enums/AppError');

/**
 * Подготовить тело и статус ответа, сообщающего об ошибке при авторизации
 * @param {*} error Пойманное исключение.
 * @returns {AuthResponseData}
 * @todo Вынести создание объектов {AuthResultData} в отдельную функцию?
 */
function prepareAuthError(error) {
  switch (error.name) {
    case AppError.EmailAlreadyExists:
      return [
        { ok: false, message: 'Email already registered', email: error.fields.email },
        409,
      ];

    case AppError.InvalidCredentials:
      return [
        { ok: false, message: error.message },
        401,
      ];

    default:
      return [
        { ok: false, message: error.message },
        500,
      ];
  }
}

module.exports = prepareAuthError;
