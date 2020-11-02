export const PING = 'PING';
export const PONG = 'PONG';

export interface PingI {
  type: typeof PING;
}

export interface PongI {
  type: typeof PONG;
}

export type PingpongDispatchTypes = PingI | PongI;
