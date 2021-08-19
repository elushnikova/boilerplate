import { takeEvery } from 'redux-saga/effects';
import authenticate from './authenticate';
import ActionType from '../helpers/classes/ActionType';
import logout from './logout';
import fetchHomeData from './fetchHomeData';

function* watchActions() {
  yield takeEvery(ActionType.LOGIN, authenticate);
  yield takeEvery(ActionType.REGISTER, authenticate);
  yield takeEvery(ActionType.LOGOUT, logout);
  yield takeEvery(ActionType.FETCH_HOME_DATA, fetchHomeData);
}

export default watchActions;
