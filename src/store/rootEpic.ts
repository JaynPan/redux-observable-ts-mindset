import { combineEpics } from 'redux-observable';
import { pingEpic } from './pingpong/epics';

const rootEpic = combineEpics(pingEpic);

export default rootEpic;
