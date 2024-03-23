import { createSelector } from 'reselect';

import { RootState } from '../store';
import { UserState } from './user.reducer';

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectUser = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.user
);

export const selectUserIsLoading = createSelector(
	[selectUserReducer],
	(userSlice) => userSlice.isLoading
);
