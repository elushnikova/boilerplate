const compareUser = require('../helpers/compareUser');
const prepareLoginData = require('../helpers/prepareLoginData');
const prepareUserProfile = require('../helpers/prepareUserProfile');

function login(req, res) {
  prepareLoginData(req.body.email, req.body.password)
    .then(compareUser)
    .then(([user, isMatch]) => (
      isMatch
        ? res.json({ ok: true, profile: prepareUserProfile(user) })
        : res.status(401).json({ ok: false, message: 'Invalid email or password' })
    ))
    .catch(() => {
      res.status(401).json({ ok: false, message: 'Invalid email or password' });
    });
}

module.exports = login;
