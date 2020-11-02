import { Epic, ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';

import { PingpongDispatchTypes } from './actionTypes';

export const pingEpic: Epic<PingpongDispatchTypes> = (action$) =>
  action$.pipe(
    ofType('PING'),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'PONG' }),
  );
