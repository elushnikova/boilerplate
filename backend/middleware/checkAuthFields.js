function checkAuthFields(req, res, next) {
  const { email, password } = req.body;

  if (!email) {
    res
      .status(409)
      .json({ message: 'Email must be non-empty', email });
    return;
  }

  if (!password) {
    res
      .status(409)
      .json({ message: 'Password must be non-empty', password });
    return;
  }

  next();
}

module.exports = checkAuthFields;
