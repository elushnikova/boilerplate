const AppError = require('../enums/AppError');

/**
 * Ошибка при поиске пользователя.
 * Не показывать на клиенте. Вместо этого подменять ошибку на InvalidCredentialsError;
 */
class UserNotFoundError extends Error {
  constructor(message) {
    super(message ?? 'User not found');
    this.name = AppError.UserNotFound;
  }
}

module.exports = UserNotFoundError;
