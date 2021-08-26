/**
 * Получить секреты хэширования сессий из переменной окружения.
 * @returns {Array<string>} Массив строк, где первый элемент — это нынешний секрет.
 */
function parseSessionSecrets() {
  const secrets = process.env.SESSION_SECRETS || 'foo';
  return secrets.split(',');
}

module.exports = parseSessionSecrets;
