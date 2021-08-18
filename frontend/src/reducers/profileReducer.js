import {
  CLEAR_PROFILE_DATA, CLEAR_PROFILE_ERROR, SET_PROFILE_DATA, SET_PROFILE_ERROR,
} from '../helpers/action';
import { loadState } from '../helpers/localStorage';

const persistedState = loadState('profile');

const initialState = {
  data: null,
  error: null,
};

function profileReducer(state = persistedState || initialState, action) {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case CLEAR_PROFILE_DATA:
      return {
        ...state,
        data: null,
      };

    case SET_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_PROFILE_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

export default profileReducer;
