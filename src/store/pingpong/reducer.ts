import { PingpongDispatchTypes, PING, PONG } from './actionTypes';

export interface PingPongStateI {
  isPinging: boolean;
}

export const initPingPongState = {
  isPinging: false,
};

const pingpongReducer = (
  state: PingPongStateI = initPingPongState,
  action: PingpongDispatchTypes,
): PingPongStateI => {
  switch (action.type) {
    case PING:
      return {
        isPinging: true,
      };
    case PONG:
      return {
        isPinging: false,
      };
    default:
      return state;
  }
};

export default pingpongReducer;
