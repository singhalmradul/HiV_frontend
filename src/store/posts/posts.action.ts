import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';

import { POST_ACTION_TYPES, Post } from './posts.types';
// ---------------------- FEED POSTS ACTION TYPES ----------------------
export type FetchFeedPostsStart = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_FEED_POSTS_START,
	string
>;

export type FetchFeedPostsSuccess = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_FEED_POSTS_SUCCESS,
	Post[]
>;

export type FetchFeedPostsFailed = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_FEED_POSTS_FAILED,
	Error
>;
// ---------------------- USER POSTS ACTION TYPES ----------------------
export type FetchUserPostsStart = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_USER_POSTS_START,
	string
>;

export type FetchUserPostsSuccess = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_USER_POSTS_SUCCESS,
	Post[]
>;

export type FetchUserPostsFailed = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_USER_POSTS_FAILED,
	Error
>;
// ---------------------- POSTS ACTION ----------------------
export type PostsAction =
	| FetchFeedPostsStart
	| FetchFeedPostsSuccess
	| FetchFeedPostsFailed
	| FetchUserPostsStart
	| FetchUserPostsSuccess
	| FetchUserPostsFailed;
// ---------------------- FEED POSTS ACTION CREATORS ----------------------
export const fetchFeedPostsStart = withMatcher(
	(userId: string): FetchFeedPostsStart =>
		createAction(POST_ACTION_TYPES.FETCH_FEED_POSTS_START, userId)
);

export const fetchFeedPostsSuccess = withMatcher(
	(posts: Post[]): FetchFeedPostsSuccess =>
		createAction(POST_ACTION_TYPES.FETCH_FEED_POSTS_SUCCESS, posts)
);

export const fetchFeedPostsFailed = withMatcher(
	(error: Error): FetchFeedPostsFailed =>
		createAction(POST_ACTION_TYPES.FETCH_FEED_POSTS_FAILED, error)
);
// ---------------------- USER POSTS ACTION CREATORS ----------------------
export const fetchUserPostsStart = withMatcher(
	(userId: string): FetchUserPostsStart =>
		createAction(POST_ACTION_TYPES.FETCH_USER_POSTS_START, userId)
);

export const fetchUserPostsSuccess = withMatcher(
	(posts: Post[]): FetchUserPostsSuccess =>
		createAction(POST_ACTION_TYPES.FETCH_USER_POSTS_SUCCESS, posts)
);

export const fetchUserPostsFailed = withMatcher(
	(error: Error): FetchUserPostsFailed =>
		createAction(POST_ACTION_TYPES.FETCH_USER_POSTS_FAILED, error)
);
