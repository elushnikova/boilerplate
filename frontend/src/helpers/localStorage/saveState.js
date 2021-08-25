/**
 * Сохранить данные в JSON-формате в local storage.
 * @param {string} key Ключ для хранения.
 * @param {*} state Данные для хранения.
 * @todo Переименовать функцию/параметр `state`/переменные?
 */
function saveState(key, state) {
  const serializedState = JSON.stringify(state);

  try {
    localStorage.setItem(key, serializedState);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to save data to local storage');
  }
}

export default saveState;
