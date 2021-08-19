import { call, put } from 'redux-saga/effects';
import Action from '../classes/Action';
import fetchJson from '../fetchJson';

function* fetchHomeData() {
  let data;
  try {
    data = yield call(fetchJson);
  } catch (error) {
    yield put(Action.setHomeError(error));
  }

  yield data.ok
    ? put(Action.setHomeData(data.message))
    : put(Action.setHomeError(new Error(data.message)));
}

export default fetchHomeData;