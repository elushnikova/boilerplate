import { takeEvery } from 'redux-saga/effects';
import authenticate from './authenticate';
import ActionType from '../classes/ActionType';
import logout from './logout';

function* watchActions() {
  yield takeEvery(ActionType.LOGIN, authenticate);
  yield takeEvery(ActionType.REGISTER, authenticate);
  yield takeEvery(ActionType.LOGOUT, logout);
}

export default watchActions;
