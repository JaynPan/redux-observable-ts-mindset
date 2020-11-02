import { PingI, PING, PONG, PongI } from './actionTypes';

export const ping = (): PingI => ({
  type: PING,
});

export const pong = (): PongI => ({
  type: PONG,
});
