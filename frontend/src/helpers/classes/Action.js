import ActionType from './ActionType';
import createAction from '../createAction';

class Action {
  static register(payload) {
    return createAction(ActionType.REGISTER, payload);
  }

  static login(payload) {
    return createAction(ActionType.LOGIN, payload);
  }

  static logout() {
    return createAction(ActionType.LOGOUT);
  }

  static setProfileData(payload) {
    return createAction(ActionType.SET_PROFILE_DATA, payload);
  }

  static clearProfileData() {
    return createAction(ActionType.CLEAR_PROFILE_DATA);
  }

  static setProfileError(payload) {
    return createAction(ActionType.SET_PROFILE_ERROR, payload);
  }

  static clearProfileError() {
    return createAction(ActionType.CLEAR_PROFILE_ERROR);
  }
}

export default Action;
