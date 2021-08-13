const { User } = require('../models');

/**
 * @param {[string, string]} userData tuple of `[email, password]`
 * @returns {Promise<object>} Promise resolving to `user` object from DB
 */
function createUser([email, password]) {
  return User.create({ email, password });
}

module.exports = createUser;
