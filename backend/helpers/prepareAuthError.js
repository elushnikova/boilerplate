const AppError = require('./enums/AppError');
const prepareAuthResult = require('./prepareAuthResult');

/**
 * Подготовить тело и статус ответа, сообщающего об ошибке при авторизации
 * @param {*} error Пойманное исключение.
 * @returns {AuthResponseData
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

    default:
      return [
        prepareAuthResult(error),
        500,
      ];
  }
}

module.exports = prepareAuthError;
