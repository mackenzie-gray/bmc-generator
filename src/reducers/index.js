import { combineReducers } from 'redux';
import bmcAppState from './bmcReducer';

const rootReducer = combineReducers({
  bmcAppState
});

export default rootReducer;
