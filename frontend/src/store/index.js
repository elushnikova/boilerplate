import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import rootReducer from './reducers';
import saveState from '../helpers/localStorage/saveState';
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
    saveState('profile', store.getState().profile.data);
  }, 1000),
);

sagaMiddleware.run(watchActions);

export default store;
