const { User } = require('../models');

/**
 * @param {string} email
 * @param {string} rawPassword
 * @returns {Promise<[object, string]>} Promise resolving with tuple of `[user, rawPassword]`
 */
function prepareLoginData(email, rawPassword) {
  return Promise.all([
    User.findOne({ where: { email } }),
    rawPassword,
  ]);
}

module.exports = prepareLoginData;
