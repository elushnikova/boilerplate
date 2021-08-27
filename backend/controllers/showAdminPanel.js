function showAdminPanel(_, res) {
  res.json({ ok: true, message: 'Hello, admin' });
}

module.exports = showAdminPanel;
