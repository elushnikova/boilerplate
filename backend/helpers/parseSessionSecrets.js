function parseSessionSecrets() {
  const secrets = process.env.SESSION_SECRETS || 'foo';
  return secrets.split(',');
}

module.exports = parseSessionSecrets;
