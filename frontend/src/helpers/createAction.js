function createAction(type, payload) {
  if (!type) {
    throw new Error('Must provide action type');
  }

  if (typeof type !== 'string') {
    throw new Error('Must provide string as action type');
  }

  return payload
    ? { type, payload }
    : { type };
}

export default createAction;
