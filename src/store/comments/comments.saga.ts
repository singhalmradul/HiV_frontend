import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';

import { fetchComments, postComment } from '../../utils/backend/backend.utils';
import {
	FetchCommentsStart,
	PostCommentStart,
	fetchCommentsFailed,
	fetchCommentsSuccess,
	postCommentFailed,
	postCommentSuccess,
} from './comments.action';
import { COMMENT_ACTION_TYPES } from './comments.types';
import { RootState } from '../store';
import { Post } from '../posts/posts.types';

// MARK: ---------------------- SELECTORS ----------------------

const selectUser = (state: RootState) => state.user.user;

const selectPosts = (state: RootState) => state.posts.posts;

// MARK: ---------------------- UTILS ----------------------

export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));

// MARK: ---------------------- SAGAS ----------------------
export function* postCommentAsync({
	payload: { postId, text },
}: PostCommentStart) {
	try {
		const user = yield* select(selectUser);

		if (!user) return;

		const { id, displayName, avatar } = user;
		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		const comment = yield* call(postComment, id, postId, text);

		comment.user = { id, displayName, avatar };
		yield* put(
			postCommentSuccess(
				updatePosts(posts, {
					...post,
					commentsCount: post.commentsCount + 1,
					comments: post.comments ? [...post.comments, comment] : [comment],
				})
			)
		);
	} catch (error) {
		yield* put(postCommentFailed(error as Error));
	}
}

export function* fetchCommentsAsync({ payload: postId }: FetchCommentsStart) {
	try {
		const comments = yield* call(fetchComments, postId);

		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		yield* put(
			fetchCommentsSuccess(
				updatePosts(posts, {
					...post,
					comments,
				})
			)
		);
	} catch (error) {
		yield* put(fetchCommentsFailed(error as Error));
	}
}

// MARK: ---------------------- WATCHERS ----------------------

export function* onPostComment() {
	yield* takeLatest(COMMENT_ACTION_TYPES.POST_COMMENT_START, postCommentAsync);
}

export function* onFetchComments() {
	yield* takeLatest(
		COMMENT_ACTION_TYPES.FETCH_COMMENTS_START,
		fetchCommentsAsync
	);
}

// MARK: ---------------------- ROOT COMMENTS SAGA ----------------------

export function* commentsSaga() {
	yield* all([call(onPostComment), call(onFetchComments)]);
}
