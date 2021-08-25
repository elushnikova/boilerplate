/**
 * Набор типов действий для reducer-функции.
 * @enum {string}
 * @todo Заменить на простой объект — синтаксис класса слишком "раздутый".
 */
class ActionType {
  static REGISTER = 'REGISTER';

  static LOGIN = 'LOGIN';

  static LOGOUT = 'LOGOUT';

  static SET_PROFILE_DATA = 'SET_PROFILE_DATA';

  static CLEAR_PROFILE_DATA = 'CLEAR_PROFILE_DATA';

  static SET_PROFILE_ERROR = 'SET_PROFILE_ERROR';

  static CLEAR_PROFILE_ERROR = 'CLEAR_PROFILE_ERROR';

  static FETCH_HOME_DATA = 'FETCH_HOME_DATA'

  static SET_HOME_DATA = 'SET_HOME_DATA';

  static CLEAR_HOME_DATA = 'CLEAR_HOME_DATA';

  static SET_HOME_ERROR = 'SET_HOME_ERROR'
}

export default ActionType;
