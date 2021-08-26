const InvalidCredentialsError = require('./errors/InvalidCredentialsError');

/**
 * Выбросить ошибку, если входящий пароль не совпадает с паролем пользователя.
 * @param {[object, boolean]} data Кортеж с пользователем и флагом совпадения паролей.
 * @throws Выбросить ошибку, если пароли не совпадают.
 * @returns {object} Вернуть объект пользователя.
 */
function checkPasswordMatch([user, isMatch]) {
  if (!isMatch) {
    throw new InvalidCredentialsError();
  }

  return user;
}

module.exports = checkPasswordMatch;
