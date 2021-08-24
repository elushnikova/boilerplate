import ActionType from './ActionType';
import createAction from '../createAction';

/**
 * Набор функций, создающих действия определённого типа (action creators).
 * @todo Заменить на простой объект — синтаксис класса слишком "раздутый".
 */
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

  static fetchHomeData() {
    return createAction(ActionType.FETCH_HOME_DATA);
  }

  static setHomeData(payload) {
    return createAction(ActionType.SET_HOME_DATA, payload);
  }

  static clearHomeData() {
    return createAction(ActionType.CLEAR_HOME_DATA);
  }

  static setHomeError(payload) {
    return createAction(ActionType.SET_HOME_ERROR, payload);
  }
}

export default Action;
