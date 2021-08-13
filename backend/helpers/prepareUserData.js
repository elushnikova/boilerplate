const bcrypt = require('bcrypt');

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<[string, string]>} Promise resolving to tuple of `[email, hash]`
 */
function prepareUserData(email, password) {
  return Promise.all([
    email,
    bcrypt.hash(password, SALT_ROUNDS),
  ]);
}

module.exports = prepareUserData;
