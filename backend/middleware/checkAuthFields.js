const initAuthResponder = require('../helpers/initAuthResponder');
const prepareAuthResult = require('../helpers/prepareAuthResult');

/** Промежуточная функция для проверки наличия email и пароля в теле запроса. */
function checkAuthFields(req, res, next) {
  const { email, password } = req.body;
  const sendAuthResponse = initAuthResponder(res);

  if (!email) {
    sendAuthResponse([
      prepareAuthResult(new Error('Email must be non-empty')),
      400,
    ]);
    return;
  }

  if (!password) {
    sendAuthResponse([
      prepareAuthResult(new Error('Password must be non-empty')),
      400,
    ]);
    return;
  }

  next();
}

module.exports = checkAuthFields;
