import { createSelector } from 'reselect';

import { RootState } from '../store';
import { UserState } from './user.reducer';

const selectUserSlice = (state: RootState): UserState => state.user;

export const selectUser = createSelector(
	[selectUserSlice],
	(userSlice) => userSlice.currentUser
);

export const selectUserIsLoading = createSelector(
	[selectUserSlice],
	(userSlice) => userSlice.isLoading
);

export const selectCurrentUserId = createSelector(
	[selectUser],
	(user) => user?.id
);
