const { User } = require('../models');

/**
 * Начать поиск пользователя по email для логина.
 * @param {string} email Входящий email.
 * @param {string} rawPassword Входящий пароль.
 * @returns {Promise<[object, string]>} Промис с кортежем из пользователя и входящего пароля.
 */
function prepareLoginData(email, rawPassword) {
  return Promise.all([
    User.findOne({ where: { email } }),
    rawPassword,
  ]);
}

module.exports = prepareLoginData;
