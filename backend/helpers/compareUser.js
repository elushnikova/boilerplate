const bcrypt = require('bcrypt');

/**
 * @param {[object | null, string]} data tuple of `[user, rawPassword]`
 * @returns {Promise<[object, boolean]>} Promise resolving with tuple of `[user, isMatch]`
 * @throws `Error` if user is null
 */
function compareUser([user, rawPassword]) {
  if (!user) {
    throw new Error('User not found');
  }

  return Promise.all([
    user,
    bcrypt.compare(rawPassword, user.password),
  ]);
}

module.exports = compareUser;
