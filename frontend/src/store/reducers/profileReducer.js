import ActionType from '../../helpers/enums/ActionType';
import loadData from '../../helpers/localStorage/loadData';

const initialState = {
  data: loadData('profile'),
  error: null,
};

function profileReducer(state = initialState, action) {
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
