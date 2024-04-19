import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';

import {
	fetchComments,
	postComment,
} from '../../utils/backend/backend.utils';
import {
	FetchCommentsStart,
	PostCommentStart,
	fetchCommentsFailed,
	fetchCommentsStart,
	fetchCommentsSuccess,
	postCommentFailed,
	postCommentSuccess,
} from './comments.action';
import { COMMENT_ACTION_TYPES } from './comments.types';
import { RootState } from '../store';
import { Post } from '../posts/posts.types';

// MARK: ---------------------- SELECTORS ----------------------

const selectUserId = (state: RootState) => state.user.user?.id ?? '';

const selectPosts = (state: RootState) => state.posts.posts;

// MARK: ---------------------- UTILS ----------------------

export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));

// MARK: ---------------------- SAGAS ----------------------
export function* postCommentAsync({ payload: { postId, text } }: PostCommentStart) {
	try {
		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		const userId = yield* select(selectUserId);
		yield* call(postComment, userId, postId, text);

		yield* put(fetchCommentsStart(postId));

		yield* put(
			postCommentSuccess(
				updatePosts(posts, {
					...post,
					comments: post.comments + 1,
				})
			)
		);
	} catch (error) {
		yield* put(postCommentFailed(error as Error));
	}
}

export function* fetchCommentsAsync({ payload: postId }: FetchCommentsStart) {
	console.log('fetchCommentsAsync');
	try {
		console.log('fetchCommentsAsync');
		const comments = yield* call(fetchComments, postId);

		yield* put(fetchCommentsSuccess(comments));
	} catch (error) {
		yield* put(fetchCommentsFailed(error as Error));
	}
}

// MARK: ---------------------- WATCHERS ----------------------

export function* onPostComment() {
	yield* takeLatest(COMMENT_ACTION_TYPES.POST_COMMENT_START, postCommentAsync);
}

export function* onFetchComments() {
	yield* takeLatest(COMMENT_ACTION_TYPES.FETCH_COMMENTS_START, fetchCommentsAsync);
}

// MARK: ---------------------- ROOT COMMENTS SAGA ----------------------

export function* commentsSaga() {
	yield* all([
		call(onPostComment),
		call(onFetchComments),
	]);
}
