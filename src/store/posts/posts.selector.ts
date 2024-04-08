import { createSelector } from 'reselect';
import { RootState } from '../store';
import { PostsState } from './posts.reducer';

const selectPostsReducer = (state: RootState): PostsState => state.posts;

export const selectUserPosts = createSelector(
	[selectPostsReducer],
	(postsSlice) => postsSlice.userPosts
);

export const selectFeedPosts = createSelector(
	[selectPostsReducer],
	(postsSlice) => postsSlice.feedPosts
);
export const selectPostsIsLoading = createSelector(
	[selectPostsReducer],
	(postsSlice) => postsSlice.isLoading
);
