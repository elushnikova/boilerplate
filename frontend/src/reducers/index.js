import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
});

export default rootReducer;
