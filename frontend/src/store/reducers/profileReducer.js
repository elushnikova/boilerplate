import ActionType from '../../helpers/classes/ActionType';
import loadState from '../../helpers/localStorage/loadState';

const initialState = {
  data: null,
  error: null,
};

const persistedState = {
  data: loadState('profile'),
  error: null,
};

function profileReducer(state = persistedState || initialState, action) {
  switch (action.type) {
    case ActionType.SET_PROFILE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case ActionType.CLEAR_PROFILE_DATA:
      return {
        ...state,
        data: null,
      };

    case ActionType.SET_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };

    case ActionType.CLEAR_PROFILE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

export default profileReducer;
