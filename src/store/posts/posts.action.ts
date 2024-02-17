import {
	Action,
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { POST_ACTION_TYPES, Post } from './posts.types';

export type FetchPostsStart = Action<POST_ACTION_TYPES.FETCH_POSTS_START>;

export type FetchPostsSuccess = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_POSTS_SUCCESS,
	Post[]
>;

export type FetchPostsFailed = ActionWithPayload<
	POST_ACTION_TYPES.FETCH_POSTS_FAILED,
	Error
>;

export type PostsAction =
	| FetchPostsStart
	| FetchPostsSuccess
	| FetchPostsFailed;

export const fetchPostsStart = withMatcher(
	(): FetchPostsStart => createAction(POST_ACTION_TYPES.FETCH_POSTS_START)
);

export const fetchPostsSuccess = withMatcher(
	(posts: Post[]): FetchPostsSuccess =>
		createAction(POST_ACTION_TYPES.FETCH_POSTS_SUCCESS, posts)
);

export const fetchPostsFailed = withMatcher(
	(error: Error): FetchPostsFailed =>
		createAction(POST_ACTION_TYPES.FETCH_POSTS_FAILED, error)
);
