/**
 * Запросить данные и прочесть их в JSON-формате.
 * @param {string} path Путь для сетевого запроса.
 * @param {RequestInit|undefined} options Дополнительные параметры сетевого запроса.
 * @returns {Promise} Исполняется в данные, полученные из JSON-тела ответа.
 */
function fetchJson(path = '', options) {
  if (typeof path !== 'string') {
    throw new Error('Must provide string as path');
  }

  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

  return fetch(baseUrl + path, {
    credentials: 'include',
    ...options,
  })
    .then((response) => response.json());
}

export default fetchJson;
