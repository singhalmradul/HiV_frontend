import {
	ActionWithPayload,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { TIMER_ACTION_TYPES } from './timer.types';

export type SetTmerDisplay = ActionWithPayload<
	TIMER_ACTION_TYPES.SET_TIMER_DISPLAY,
	boolean
>;

export const setDisplayTimer = withMatcher(
	(display: boolean): SetTmerDisplay => ({
		type: TIMER_ACTION_TYPES.SET_TIMER_DISPLAY,
		payload: display,
	})
);
