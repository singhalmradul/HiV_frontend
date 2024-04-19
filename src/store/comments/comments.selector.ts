import { createSelector } from 'reselect';
import { RootState } from '../store';
import { CommentsState } from './comments.reducer';

const selectCommentsSlice = (state: RootState): CommentsState => state.comments;

export const selectComments = createSelector(
	[selectCommentsSlice],
	(commentsSlice) => commentsSlice.comments
);
export const selectCommentsIsLoading = createSelector(
	[selectCommentsSlice],
	(commentsSlice) => commentsSlice.isLoading
);
