const bcrypt = require('bcrypt');

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

/**
 * Начать хэширование входящего пароля.
 * @param {string} email Входящий email.
 * @param {string} password Входящий пароль.
 * @returns {Promise<[string, string]>} Промис с кортежем из email и хэшированного пароля.
 */
function prepareUserData(email, password) {
  return Promise.all([
    email,
    bcrypt.hash(password, SALT_ROUNDS),
  ]);
}

module.exports = prepareUserData;
