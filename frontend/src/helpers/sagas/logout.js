import { call, put } from 'redux-saga/effects';
import Action from '../classes/Action';
import fetchJson from '../fetchJson';

function* logout() {
  yield put(Action.clearProfileError());

  let data;
  try {
    data = yield call(fetchJson, '/session', { method: 'DELETE' });
  } catch (error) {
    yield put(Action.setProfileError(error));
  }

  if (data.ok) {
    yield put(Action.clearProfileData());
    yield put(Action.clearHomeData());
  } else {
    yield put(Action.setProfileError(new Error(data.message)));
  }
}

export default logout;
