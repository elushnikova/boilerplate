function fetchJson(path, options) {
  const baseUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

  return fetch(baseUrl + path,
    {
      credentials: 'include',
      ...options,
    })
    .then((response) => response.json());
}

export default fetchJson;
