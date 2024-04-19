import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { Post } from '../posts/posts.types';

import { LIKE_ACTION_TYPES, Like } from './likes.types';

// MARK: ---------------------- TOGGLE LIKE ACTION TYPES ----------------------

export type ToggleLikeStart = ActionWithPayload<
	LIKE_ACTION_TYPES.TOGGLE_LIKE_START,
	string
>;
export type ToggleLikeSuccess = ActionWithPayload<
	LIKE_ACTION_TYPES.TOGGLE_LIKE_SUCCESS,
	Post[]
>;

export type ToggleLikeFailed = ActionWithPayload<
	LIKE_ACTION_TYPES.TOGGLE_LIKE_FAILED,
	Error
>;

// MARK: ---------------------- FETCH LIKES ACTION TYPES ----------------------

export type FetchLikesStart = ActionWithPayload<
	LIKE_ACTION_TYPES.FETCH_LIKES_START,
	string
>;

export type FetchLikesSuccess = ActionWithPayload<
	LIKE_ACTION_TYPES.FETCH_LIKES_SUCCESS,
	Like[]
>;

export type FetchLikesFailed = ActionWithPayload<
	LIKE_ACTION_TYPES.FETCH_LIKES_FAILED,
	Error
>;
// MARK: ---------------------- POSTS ACTION ----------------------

export type LikesAction =
	| ToggleLikeStart
	| ToggleLikeSuccess
	| ToggleLikeFailed;

// MARK: ---------------------- TOOGLE LIKE ACTION CREATORS ----------------------

export const toggleLikeStart = withMatcher(
	(postId: string): ToggleLikeStart =>
		createAction(LIKE_ACTION_TYPES.TOGGLE_LIKE_START, postId)
);

export const toggleLikeSuccess = withMatcher(
	(posts: Post[]): ToggleLikeSuccess =>
		createAction(LIKE_ACTION_TYPES.TOGGLE_LIKE_SUCCESS, posts)
);

export const toggleLikeFailed = withMatcher(
	(error: Error): ToggleLikeFailed =>
		createAction(LIKE_ACTION_TYPES.TOGGLE_LIKE_FAILED, error)
);

// MARK: ---------------------- FETCH LIKES ACTION CREATORS ----------------------

export const fetchLikesStart = withMatcher(
	(postId: string): FetchLikesStart =>
		createAction(LIKE_ACTION_TYPES.FETCH_LIKES_START, postId)
);

export const fetchLikesSuccess = withMatcher(
	(likes: Like[]): FetchLikesSuccess =>
		createAction(LIKE_ACTION_TYPES.FETCH_LIKES_SUCCESS, likes)
);

export const fetchLikesFailed = withMatcher(
	(error: Error): FetchLikesFailed =>
		createAction(LIKE_ACTION_TYPES.FETCH_LIKES_FAILED, error)
);