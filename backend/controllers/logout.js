const SESSION_COOKIE = process.env.SESSION_COOKIE || 'user_sid';

function logout(req, res) {
  req.session.destroy();
  res
    .clearCookie(SESSION_COOKIE)
    .json({ ok: true });
}

module.exports = logout;
