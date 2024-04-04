import { createSelector } from 'reselect';
import { RootState } from '../store';
import { PostsState } from './posts.reducer';

const selectPostsReducer = (state: RootState): PostsState => state.posts;

export const selectUserPosts = createSelector(
	[selectPostsReducer],
	(postsSlice) => postsSlice.userPosts
);

export const selectPostsIsLoading = createSelector(
	[selectPostsReducer],
	(postsSlice) => postsSlice.isLoading
);
