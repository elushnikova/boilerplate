const SESSION_COOKIE = process.env.SESSION_COOKIE || 'user_sid';

function logout(req, res) {
  req.session.destroy((error) => {
    if (error) {
      return res
        .status(500)
        .json({ ok: false, message: 'Error logging out' });
    }

    return res
      .clearCookie(SESSION_COOKIE)
      .json({ ok: true });
  });
}

module.exports = logout;
