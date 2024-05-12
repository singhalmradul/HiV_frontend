import { createSelector } from 'reselect';

import { RootState } from '../store';
import { UserState } from './user.reducer';

const selectUserSlice = (state: RootState): UserState => state.user;

export const selectUser = createSelector(
	[selectUserSlice],
	(userSlice) => userSlice.user
);

export const selectCurrentUserId = createSelector(
	[selectUserSlice],
	(userSlice) => userSlice.currentUserId ?? ''
);

export const selectUserIsLoading = createSelector(
	[selectUserSlice],
	(userSlice) => userSlice.isLoading
);

export const selectUserId = createSelector(
	[selectUser],
	(user) => user?.id ?? ''
);

export const selectIsUserFollowed = createSelector(
	[selectUser],
	(user) => user?.isFollowed ?? false
);

export const selectUserError = createSelector(
	[selectUserSlice],
	(userSlice) => userSlice.error
);
