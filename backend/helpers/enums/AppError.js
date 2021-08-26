/**
 * Набор ошибок, для обработки которых прописана кастомная логика.
 * @enum {string}
 */
const AppError = {
  /** Сценарий попытки зарегистрировать email, уже существующий в БД. */
  EmailAlreadyExists: 'SequelizeUniqueConstraintError',

  /** Сценарий попытки войти в учётную запись с несовпадающим паролем. */
  InvalidCredentials: 'InvalidCredentialsError',

  /** Сценарий попытки войти в несуществующую учётную запись. */
  UserNotFound: 'UserNotFoundError',
};

module.exports = AppError;
