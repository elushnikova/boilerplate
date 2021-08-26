const InvalidCredentialsError = require('./InvalidCredentialsError');

/**
 * Выбросить ошибку, если предоставленный пароль несовпадает с паролем пользователя.
 * @param {[object, boolean]}
 * @throws {InvalidCredentialsError}
 * @returns {object} Вернуть объект пользователя для последующей работы с ним.
 */
function checkPasswordMatch([user, isMatch]) {
  if (!isMatch) {
    throw new InvalidCredentialsError();
  }

  return user;
}

module.exports = checkPasswordMatch;
