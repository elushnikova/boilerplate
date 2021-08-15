const compareUser = require('../helpers/compareUser');
const prepareLoginData = require('../helpers/prepareLoginData');
const prepareUserProfile = require('../helpers/prepareUserProfile');

function login(req, res) {
  prepareLoginData(req.body.email, req.body.password)
    .then(compareUser)
    .then(([user, isMatch]) => {
      if (!isMatch) {
        throw new Error('Invalid email or password');
      }

      return user;
    })
    .then(prepareUserProfile)
    .then((profile) => {
      req.session.profile = profile;

      return res
        .json({ ok: true, profile });
    })
    .catch(() => {
      res
        .status(401)
        .json({ ok: false, message: 'Invalid email or password' });
    });
}

module.exports = login;
