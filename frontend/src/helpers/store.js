import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import reducer from './reducer';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(reducer, persistedState, composeWithDevTools());

function persistState() {
  saveState({
    profile: store.getState().profile,
  });
}

store.subscribe(
  throttle(persistState, 1000),
);

export default store;
