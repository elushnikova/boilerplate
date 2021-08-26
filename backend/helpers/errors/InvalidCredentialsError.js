const AppError = require('../enums/AppError');

/**
 * Ошибка попытки логина.
 * Использовать для попыток войти в учётную запись с несовпадающим паролем.
 */
class InvalidCredentialsError extends Error {
  constructor(message) {
    super(message ?? 'Invalid email or password');
    this.name = AppError.InvalidCredentials;
  }
}

module.exports = InvalidCredentialsError;
