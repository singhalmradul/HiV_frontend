import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { POST_ACTION_TYPES, Post } from './posts.types';

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

export type PostsAction =
	| FetchUserPostsStart
	| FetchUserPostsSuccess
	| FetchUserPostsFailed;

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
