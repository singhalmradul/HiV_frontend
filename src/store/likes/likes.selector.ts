import { createSelector } from 'reselect';
import { RootState } from '../store';
import { LikesState } from './likes.reducer';

const selectLikesSlice = (state: RootState): LikesState => state.likes;

export const selectLikes = createSelector(
	[selectLikesSlice],
	(likesSlice) => likesSlice.likes
);
export const selectLikesIsLoading = createSelector(
	[selectLikesSlice],
	(likesSlice) => likesSlice.isLoading
);
