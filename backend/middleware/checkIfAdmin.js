function checkIfAdmin(req, res, next) {
  if (req.session.profile.isAdmin) {
    next();
    return;
  }

  res
    .status(403)
    .json({ ok: false, message: 'For admins only' });
}

module.exports = checkIfAdmin;
