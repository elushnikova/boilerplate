function handleHome(req, res) {
  if (!req.session.profile) {
    return res
      .status(401)
      .json({ ok: false, message: 'Please, authenticate' });
  }

  return res.json({ ok: true, message: 'Hello, world' });
}

module.exports = handleHome;
