import {
	ActionWithPayload,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { MODAL_ACTION_TYPES } from './modal.types';

export type SetModalDisplay = ActionWithPayload<
	MODAL_ACTION_TYPES.SET_MODAL_DISPLAY,
	boolean
>;

export const setDisplayModal = withMatcher(
	(display: boolean): SetModalDisplay => ({
		type: MODAL_ACTION_TYPES.SET_MODAL_DISPLAY,
		payload: display,
	})
);
