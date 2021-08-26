const bcrypt = require('bcrypt');
const UserNotFoundError = require('./errors/UserNotFoundError');

/**
 * @param {[object | null, string]} data Кортеж из объекта пользователя и пароля для проверки.
 * @returns {Promise<[object, boolean]>} `Promise<[user, isMatch]>`
 * @throws `Error` if user is null
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
