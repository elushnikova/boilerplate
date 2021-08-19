import { call, put } from 'redux-saga/effects';
import Action from '../classes/Action';
import fetchJson from '../fetchJson';

function* authenticate(...args) {
  yield put(Action.clearProfileError());

  const action = args[args.length - 1];
  const path = args.length > 1 ? args[0] : '';
  let data;

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
