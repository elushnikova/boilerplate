/**
 * @returns {object | undefined} Either persisted state object from local storage
 * or `undefined` — so that reducers can initialize state on their own.
 */
function loadState(key) {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
}

export default loadState;
