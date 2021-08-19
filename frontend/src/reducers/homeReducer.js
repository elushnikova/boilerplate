import ActionType from '../helpers/classes/ActionType';

const initialState = {
  data: null,
  error: null,
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_HOME_DATA:
      return { ...state, data: action.payload, error: null };

    case ActionType.CLEAR_HOME_DATA:
      return { ...state, data: null };

    case ActionType.SET_HOME_ERROR:
      return { ...state, error: action.payload.message };

    default:
      return state;
  }
}

export default homeReducer;
