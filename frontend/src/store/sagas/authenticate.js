import { call, put } from 'redux-saga/effects';
import Action from '../../helpers/classes/Action';
import ActionType from '../../helpers/classes/ActionType';
import fetchJson from '../../helpers/fetchJson';
import isAuthData from '../../helpers/isAuthData';

function* authenticate(action) {
  if (!isAuthData(action.payload)) {
    const error = new Error('Must provide both email and password');
    yield put(Action.setProfileError(error));
    return;
  }

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
    return;
  }

  yield data.ok
    ? put(Action.setProfileData(data.profile))
    : put(Action.setProfileError(new Error(data.message)));
}

export default authenticate;
