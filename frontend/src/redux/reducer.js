const initialState = {
  profile: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PROFILE':
      return { ...state, profile: action.payload };

    case 'REMOVE_PROFILE':
      const stateCopy = { ...state }; // eslint-disable-line no-case-declarations
      delete stateCopy.profile;
      return stateCopy;

    default:
      return state;
  }
}

export default reducer;
