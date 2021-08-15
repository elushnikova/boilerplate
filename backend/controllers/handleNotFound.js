function handleNotFound(_, res) {
  res.redirect('/api');
}

module.exports = handleNotFound;
