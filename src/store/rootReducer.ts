import { combineReducers } from 'redux';

import pingpongReducer from './pingpong/reducer';
import pokemonReducer from './pokemon/reducer';

export default combineReducers({
  pingpong: pingpongReducer,
  pokemon: pokemonReducer,
});
