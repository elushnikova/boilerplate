/**
 * Загрузить данные в JSON-формате из local storage.
 * @param {string} key Ключ, по которому хранится данный фрагмент состояния.
 * @returns {object|null}
 */
function loadData(key) {
  const serializedData = localStorage.getItem(key);

  if (serializedData === null) {
    return serializedData;
  }

  try {
    return JSON.parse(serializedData);
  } catch (error) {
    return null;
  }
}

export default loadData;
