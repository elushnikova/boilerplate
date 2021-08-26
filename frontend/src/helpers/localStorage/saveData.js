/**
 * Сохранить данные в JSON-формате в local storage.
 * @param {string} key Ключ для хранения.
 * @param {*} data Данные для хранения.
 */
function saveData(key, data) {
  const serializedData = JSON.stringify(data);

  try {
    localStorage.setItem(key, serializedData);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to save data to local storage');
  }
}

export default saveData;
