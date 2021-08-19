import { call, put } from 'redux-saga/effects';
import Action from '../classes/Action';
import ActionType from '../classes/ActionType';
import fetchJson from '../fetchJson';

function* authenticate(action) {
  let data;
  const path = action.type === ActionType.LOGIN
    ? '/session'
    : '';

  try {
    data = yield call(fetchJson, path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
  } catch (error) {
    yield put(Action.setProfileError(error));
  }

  yield data.ok
    ? put(Action.setProfileData(data.profile))
    : put(Action.setProfileError(new Error(data.message)));
}

export default authenticate;
