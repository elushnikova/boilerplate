import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { saveState } from './localStorage';

const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(
  throttle(() => {
    saveState('profile', store.getState().profile.data);
  }, 1000),
);

export default store;
