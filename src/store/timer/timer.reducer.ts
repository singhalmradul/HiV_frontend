import { UnknownAction } from 'redux';
import { setDisplayTimer } from './timer.action';

export type TimerState = {
  displayTimer: boolean;
};

const INITIAL_STATE: TimerState = {
  displayTimer: true,
};
export const timerReducer = (
  state = INITIAL_STATE,
  action: UnknownAction
): TimerState => {
  if (setDisplayTimer.match(action)) {
    return { ...state, displayTimer: action.payload };
  }

  return state;
};
