import { combineEpics } from 'redux-observable';

import { pingEpic } from './pingpong/epics';
import { fetchPokemonEpic } from './pokemon/epics';

const rootEpic = combineEpics(pingEpic, fetchPokemonEpic);

export default rootEpic;
