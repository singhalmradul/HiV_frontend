import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectTimerSlice = (state: RootState) => state.timer;

export const selectDisplayTimer = createSelector(
	[selectTimerSlice],
	(timer) => timer.displayTimer
);
