import { TextWithFile } from '../../utils/backend/backend.utils';
import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';

import { POST_ACTION_TYPES, POST_TYPES, Post } from './posts.types';

// MARK: ---------------------- FETCH POSTS ACTION TYPES ----------------------

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

// MARK: ---------------------- CREATE POST ACTION TYPES ----------------------

export type CreatePostStart = ActionWithPayload<
	POST_ACTION_TYPES.CREATE_POST_START,
	TextWithFile
>;

export type CreatePostSuccess = ActionWithPayload<
	POST_ACTION_TYPES.CREATE_POST_SUCCESS,
	Post[]
>;

export type CreatePostFailed = ActionWithPayload<
	POST_ACTION_TYPES.CREATE_POST_FAILED,
	Error
>;

// MARK: ---------------------- POSTS ACTION ----------------------

export type PostsAction =
	| FetchPostsStart
	| FetchPostsSuccess
	| FetchPostsFailed
	| CreatePostStart
	| CreatePostSuccess
	| CreatePostFailed

// MARK: ---------------------- FETCH POSTS ACTION CREATORS ----------------------

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

// MARK: ---------------------- CREATE POST ACTION CREATORS ----------------------

export const createPostStart = withMatcher(
	(textWithFile: TextWithFile): CreatePostStart =>
		createAction(POST_ACTION_TYPES.CREATE_POST_START, textWithFile)
);

export const createPostSuccess = withMatcher(
	(posts: Post[]): CreatePostSuccess =>
		createAction(POST_ACTION_TYPES.CREATE_POST_SUCCESS, posts)
);

export const createPostFailed = withMatcher(
	(error: Error): CreatePostFailed =>
		createAction(POST_ACTION_TYPES.CREATE_POST_FAILED, error)
);