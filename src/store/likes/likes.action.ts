import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { Post } from '../posts/posts.types';

import { LIKE_ACTION_TYPES, Like } from './likes.types';

// MARK: ---------------------- LIKE POST ACTION TYPES ----------------------

export type LikePostStart = ActionWithPayload<
	LIKE_ACTION_TYPES.LIKE_POST_START,
	string
>;
export type LikePostSuccess = ActionWithPayload<
	LIKE_ACTION_TYPES.LIKE_POST_SUCCESS,
	Post[]
>;

export type LikePostFailed = ActionWithPayload<
	LIKE_ACTION_TYPES.LIKE_POST_FAILED,
	Error
>;

// MARK: ---------------------- UNLIKE POST ACTION TYPES ----------------------

export type UnlikePostStart = ActionWithPayload<
	LIKE_ACTION_TYPES.UNLIKE_POST_START,
	string
>;
export type UnlikePostSuccess = ActionWithPayload<
	LIKE_ACTION_TYPES.UNLIKE_POST_SUCCESS,
	Post[]
>;

export type UnlikePostFailed = ActionWithPayload<
	LIKE_ACTION_TYPES.UNLIKE_POST_FAILED,
	Error
	>;

// MARK: ---------------------- FETCH LIKES ACTION TYPES ----------------------

export type FetchLikesStart = ActionWithPayload<
	LIKE_ACTION_TYPES.FETCH_LIKES_START,
	string
>;

export type FetchLikesSuccess = ActionWithPayload<
	LIKE_ACTION_TYPES.FETCH_LIKES_SUCCESS,
	Post[]
>;

export type FetchLikesFailed = ActionWithPayload<
	LIKE_ACTION_TYPES.FETCH_LIKES_FAILED,
	Error
>;
// MARK: ---------------------- POSTS ACTION ----------------------

export type LikesAction =
	| LikePostStart
	| LikePostSuccess
	| LikePostFailed;

// MARK: ---------------------- LIKE POST ACTION CREATORS ----------------------

export const likePostStart = withMatcher(
	(postId: string): LikePostStart =>
		createAction(LIKE_ACTION_TYPES.LIKE_POST_START, postId)
);

export const likePostSuccess = withMatcher(
	(posts: Post[]): LikePostSuccess =>
		createAction(LIKE_ACTION_TYPES.LIKE_POST_SUCCESS, posts)
);

export const likePostFailed = withMatcher(
	(error: Error): LikePostFailed =>
		createAction(LIKE_ACTION_TYPES.LIKE_POST_FAILED, error)
);

// MARK: ---------------------- UNLIKE POST ACTION CREATORS ----------------------

export const unlikePostStart = withMatcher(
	(postId: string): UnlikePostStart =>
		createAction(LIKE_ACTION_TYPES.UNLIKE_POST_START, postId)
);

export const unlikePostSuccess = withMatcher(
	(posts: Post[]): UnlikePostSuccess =>
		createAction(LIKE_ACTION_TYPES.UNLIKE_POST_SUCCESS, posts)
);

export const unlikePostFailed = withMatcher(
	(error: Error): UnlikePostFailed =>
		createAction(LIKE_ACTION_TYPES.UNLIKE_POST_FAILED, error)
);

// MARK: ---------------------- FETCH LIKES ACTION CREATORS ----------------------

export const fetchLikesStart = withMatcher(
	(postId: string): FetchLikesStart =>
		createAction(LIKE_ACTION_TYPES.FETCH_LIKES_START, postId)
);

export const fetchLikesSuccess = withMatcher(
	(posts: Post[]): FetchLikesSuccess =>
		createAction(LIKE_ACTION_TYPES.FETCH_LIKES_SUCCESS, posts)
);

export const fetchLikesFailed = withMatcher(
	(error: Error): FetchLikesFailed =>
		createAction(LIKE_ACTION_TYPES.FETCH_LIKES_FAILED, error)
);