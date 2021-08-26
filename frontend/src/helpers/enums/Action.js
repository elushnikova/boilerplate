import ActionType from './ActionType';
import createAction from '../createAction';

/**
 * Набор функций, создающих действия определённого типа (action creators).
 * @enum {Action}
 */

const Action = {
  register: (payload) => createAction(ActionType.REGISTER, payload),
  login: (payload) => createAction(ActionType.LOGIN, payload),
  logout: () => createAction(ActionType.LOGOUT),

  setProfileData: (payload) => createAction(ActionType.SET_PROFILE_DATA, payload),
  clearProfileData: () => createAction(ActionType.CLEAR_PROFILE_DATA),
  setProfileError: (payload) => createAction(ActionType.SET_PROFILE_ERROR, payload),
  clearProfileError: () => createAction(ActionType.CLEAR_PROFILE_ERROR),

  fetchHomeData: () => createAction(ActionType.FETCH_HOME_DATA),
  setHomeData: (payload) => createAction(ActionType.SET_HOME_DATA, payload),
  clearHomeData: () => createAction(ActionType.CLEAR_HOME_DATA),
  setHomeError: (payload) => createAction(ActionType.SET_HOME_ERROR, payload),
};

export default Action;
