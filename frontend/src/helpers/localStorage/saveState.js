function saveState(key, state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
}

export default saveState;
