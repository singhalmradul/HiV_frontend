import { CommentWithoutUserId } from '../../utils/backend/backend.utils';
import {
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { Post } from '../posts/posts.types';

import { COMMENT_ACTION_TYPES } from './comments.types';

// MARK: ---------------------- POST COMMENT ACTION TYPES ----------------------

export type PostCommentStart = ActionWithPayload<
	COMMENT_ACTION_TYPES.POST_COMMENT_START,
	CommentWithoutUserId
>;
export type PostCommentSuccess = ActionWithPayload<
	COMMENT_ACTION_TYPES.POST_COMMENT_SUCCESS,
	Post[]
>;

export type PostCommentFailed = ActionWithPayload<
	COMMENT_ACTION_TYPES.POST_COMMENT_FAILED,
	Error
>;

// MARK: ---------------------- FETCH COMMENTS ACTION TYPES ----------------------

export type FetchCommentsStart = ActionWithPayload<
	COMMENT_ACTION_TYPES.FETCH_COMMENTS_START,
	string
>;

export type FetchCommentsSuccess = ActionWithPayload<
	COMMENT_ACTION_TYPES.FETCH_COMMENTS_SUCCESS,
	Post[]
>;

export type FetchCommentsFailed = ActionWithPayload<
	COMMENT_ACTION_TYPES.FETCH_COMMENTS_FAILED,
	Error
>;

// MARK: ---------------------- COMMENTS ACTION ----------------------

export type CommentsAction =
	| PostCommentStart
	| PostCommentSuccess
	| PostCommentFailed;

// MARK: ---------------------- POST COMMENT ACTION CREATORS ----------------------

export const postCommentStart = withMatcher(
	(comment: CommentWithoutUserId): PostCommentStart =>
		createAction(COMMENT_ACTION_TYPES.POST_COMMENT_START, comment)
);

export const postCommentSuccess = withMatcher(
	(comments: Post[]): PostCommentSuccess =>
		createAction(COMMENT_ACTION_TYPES.POST_COMMENT_SUCCESS, comments)
);

export const postCommentFailed = withMatcher(
	(error: Error): PostCommentFailed =>
		createAction(COMMENT_ACTION_TYPES.POST_COMMENT_FAILED, error)
);

// MARK: ---------------------- FETCH COMMENTS ACTION CREATORS ----------------------

export const fetchCommentsStart = withMatcher(
	(postId: string): FetchCommentsStart =>
		createAction(COMMENT_ACTION_TYPES.FETCH_COMMENTS_START, postId)
);

export const fetchCommentsSuccess = withMatcher(
	(posts: Post[]): FetchCommentsSuccess =>
		createAction(COMMENT_ACTION_TYPES.FETCH_COMMENTS_SUCCESS, posts)
);

export const fetchCommentsFailed = withMatcher(
	(error: Error): FetchCommentsFailed =>
		createAction(COMMENT_ACTION_TYPES.FETCH_COMMENTS_FAILED, error)
);