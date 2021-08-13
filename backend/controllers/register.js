const prepareUserData = require('../helpers/prepareUserData');
const createUser = require('../helpers/createUser');
const prepareUserProfile = require('../helpers/prepareUserProfile');

function register(req, res) {
  prepareUserData(req.body.email, req.body.password)
    .then(createUser)
    .then(prepareUserProfile)
    .then((profile) => {
      req.session.profile = profile;
      res.status(201).json({ ok: true, profile });
    })
    .catch((error) => {
      switch (error.name) {
        case 'SequelizeUniqueConstraintError':
          return res
            .status(409)
            .json({ ok: false, message: 'Email already registered', email: error.fields.email });

        default:
          return res
            .status(500)
            .json(error);
      }
    });
}

module.exports = register;
