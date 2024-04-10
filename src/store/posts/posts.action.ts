import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';

import { POST_ACTION_TYPES, POST_TYPES, Post } from './posts.types';

// ---------------------- POSTS ACTION TYPES ----------------------
export type FetchPostsStart = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_POSTS_START,
	POST_TYPES
>;

export type FetchPostsSuccess = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_POSTS_SUCCESS,
	Post[]
>;

export type FetchPostsFailed = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_POSTS_FAILED,
	Error
>;
// ---------------------- TOGGLE LIKE ACTION TYPES ----------------------
export type ToggleLikeStart = ActionWithPayload<
	POST_ACTION_TYPES.TOGGLE_LIKE_START,
	string
>;
export type ToggleLikeSuccess = ActionWithPayload<
	POST_ACTION_TYPES.TOGGLE_LIKE_SUCCESS,
	Post[]
>;

export type ToggleLikeFailed = ActionWithPayload<
	POST_ACTION_TYPES.TOGGLE_LIKE_FAILED,
	Error
>;
// ---------------------- POSTS ACTION ----------------------
export type PostsAction =
	| FetchPostsStart
	| FetchPostsSuccess
	| FetchPostsFailed
	| ToggleLikeStart
	| ToggleLikeSuccess
	| ToggleLikeFailed;
// ---------------------- POSTS ACTION CREATORS ----------------------
export const fetchPostsStart = withMatcher(
	(postType: POST_TYPES): FetchPostsStart =>
		createAction(POST_ACTION_TYPES.FETCH_POSTS_START, postType)
);

export const fetchPostsSuccess = withMatcher(
	(posts: Post[]): FetchPostsSuccess =>
		createAction(POST_ACTION_TYPES.FETCH_POSTS_SUCCESS, posts)
);

export const fetchPostsFailed = withMatcher(
	(error: Error): FetchPostsFailed =>
		createAction(POST_ACTION_TYPES.FETCH_POSTS_FAILED, error)
);

// ---------------------- TOOGLE LIKE ACTION CREATORS ----------------------
export const toggleLikeStart = withMatcher(
	(postId: string): ToggleLikeStart =>
		createAction(POST_ACTION_TYPES.TOGGLE_LIKE_START, postId)
);

export const toggleLikeSuccess = withMatcher(
	(posts: Post[]): ToggleLikeSuccess =>
		createAction(POST_ACTION_TYPES.TOGGLE_LIKE_SUCCESS, posts)
);

export const toggleLikeFailed = withMatcher(
	(error: Error): ToggleLikeFailed =>
		createAction(POST_ACTION_TYPES.TOGGLE_LIKE_FAILED, error)
);
