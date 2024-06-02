import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectModalSlice = (state: RootState) => state.modal;

export const selectDisplayModal = createSelector(
	[selectModalSlice],
	(modal) => modal.displayModal
);
