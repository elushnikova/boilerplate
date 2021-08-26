const { User } = require('../models');

/**
 * Начать создание пользователя в БД.
 * @param {[string, string]} userData Кортеж из email и пароля.
 * @returns {Promise<object>} Промис с объектом пользователя из БД.
 */
function createUser([email, password]) {
  return User.create({ email, password, isAdmin: false });
}

module.exports = createUser;
