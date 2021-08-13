/**
 * @param {object} user object from DB
 * @returns {object} `profile` object that is safe to store on frontend
 */
function prepareUserProfile({ id, email }) {
  return { id, email };
}

module.exports = prepareUserProfile;
