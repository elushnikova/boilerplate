import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import saveData from '../helpers/localStorage/saveData';
import watchActions from './sagas/watchActions';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ),
);

store.subscribe(
  throttle(() => {
    saveData('profile', store.getState().profile.data);
  }, 1000),
);

sagaMiddleware.run(watchActions);

export default store;
