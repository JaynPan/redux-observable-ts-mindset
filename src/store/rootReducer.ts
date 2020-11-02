import { combineReducers } from 'redux';

import pingpongReducer from './pingpong/reducer';

export default combineReducers({
  pingpong: pingpongReducer,
});
