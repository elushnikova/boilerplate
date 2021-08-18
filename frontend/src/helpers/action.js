import ActionType from './ActionType';

class Action {
  static register(payload) {
    return { type: ActionType.REGISTER, payload };
  }

  static login(payload) {
    return { type: ActionType.LOGIN, payload };
  }

  static logout() {
    return { type: ActionType.LOGOUT };
  }

  static setProfileData(payload) {
    return { type: ActionType.SET_PROFILE_DATA, payload };
  }

  static clearProfileData() {
    return { type: ActionType.CLEAR_PROFILE_DATA };
  }

  static setProfileError(payload) {
    return { type: ActionType.SET_PROFILE_ERROR, payload };
  }

  static clearProfileError() {
    return { type: ActionType.CLEAR_PROFILE_ERROR };
  }
}

export default Action;
