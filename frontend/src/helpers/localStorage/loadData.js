/**
 * Загрузить и прочесть данные из local storage в JSON-формате.
 * @param {string} key Ключ, по которому хранятся данные.
 * @returns {*}
 */
function loadData(key) {
  const serializedData = localStorage.getItem(key);

  switch (serializedData) {
    case null:
      return null;

    case 'null':
      return null;

    case 'true':
      return true;

    case 'false':
      return false;

    default:
      try {
        return JSON.parse(serializedData);
      } catch (error) {
        throw new Error('Invalid JSON data in local storage');
      }
  }
}

export default loadData;
