const bcrypt = require('bcrypt');
const UserNotFoundError = require('./errors/UserNotFoundError');

/**
 * Начать сравнение входящего пароля с хэшированным паролем пользователя.
 * @param {[object|null, string]} data Кортеж с пользователем и входящим паролем.
 * @returns {Promise<[object, boolean]>} Промис с кортежем из пользователя и совпадения паролей.
 * @throws Выбросить ошибку, если нет пользователя.
 */
function compareUser([user, rawPassword]) {
  if (!user) {
    throw new UserNotFoundError();
  }

  return Promise.all([
    user,
    bcrypt.compare(rawPassword, user.password),
  ]);
}

module.exports = compareUser;
