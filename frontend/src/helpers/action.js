export const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
export const CLEAR_PROFILE_DATA = 'CLEAR_PROFILE_DATA';
export const SET_PROFILE_ERROR = 'SET_PROFILE_ERROR';
export const CLEAR_PROFILE_ERROR = 'CLEAR_PROFILE_ERROR';

const action = {
  setProfileData: (payload) => ({ type: SET_PROFILE_DATA, payload }),
  clearProfileData: () => ({ type: CLEAR_PROFILE_DATA }),
  setProfileError: (payload) => ({ type: SET_PROFILE_ERROR, payload }),
  clearProfileError: () => ({ type: CLEAR_PROFILE_ERROR }),
};

export default action;
