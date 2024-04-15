import { createSelector } from 'reselect';
import { RootState } from '../store';

export const selectCartSlice = (state: RootState) => state.modal;

export const selectDisplayModal = createSelector(
	[selectCartSlice],
	(modal) => modal.displayModal
);
