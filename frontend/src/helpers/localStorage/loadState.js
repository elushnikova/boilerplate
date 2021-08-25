/**
 * Загрузить данные в JSON-формате из local storage.
 * @param {string} key Ключ, по которому хранится данный фрагмент состояния.
 * @returns {object|null}
 * @todo Переименовать функцию/переменные?
 */
function loadState(key) {
  const serializedState = localStorage.getItem(key);

  if (serializedState === null) {
    return serializedState;
  }

  try {
    return JSON.parse(serializedState);
  } catch (error) {
    return null;
  }
}

export default loadState;
