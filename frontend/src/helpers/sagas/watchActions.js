import { takeEvery } from 'redux-saga/effects';
import authenticate from './authenticate';
import ActionType from '../classes/ActionType';

function* watchActions() {
  yield takeEvery(ActionType.LOGIN, authenticate, '/session');
  yield takeEvery(ActionType.REGISTER, authenticate);
}

export default watchActions;
