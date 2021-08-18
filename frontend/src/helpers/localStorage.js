/**
 * @returns {object | undefined} Either persisted state object from local storage
 * or `undefined` — so that reducers can initialize state on their own.
 */
export function loadState(key) {
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

export function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}
