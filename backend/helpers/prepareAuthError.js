const AppError = require('./enums/AppError');
const prepareAuthResult = require('./prepareAuthResult');

/**
 * Подготовить тело и статус ответа, сообщающего об ошибке при аутентификации.
 * @param {Error} error Пойманное исключение.
 * @returns {AuthResponseData} Данные ответа на запрос аутентификации.
 */
function prepareAuthError(error) {
  switch (error.name) {
    case AppError.EmailAlreadyExists:
      return [
        prepareAuthResult({ message: 'Email already registered', email: error.fields.email }),
        409,
      ];

    case AppError.InvalidCredentials:
      return [
        prepareAuthResult(error),
        401,
      ];

    case AppError.UserNotFound:
      return [
        prepareAuthResult(new AppError.InvalidCredentials()),
        401,
      ];

    default:
      return [
        prepareAuthResult(error),
        500,
      ];
  }
}

module.exports = prepareAuthError;
