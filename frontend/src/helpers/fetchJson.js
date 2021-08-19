function fetchJson(path = '', options) {
  if (typeof path !== 'string') {
    throw new Error('Must provide string as path');
  }

  const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';

  return fetch(baseUrl + path,
    {
      credentials: 'include',
      ...options,
    })
    .then((response) => response.json());
}

export default fetchJson;
