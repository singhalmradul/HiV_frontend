import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import {
	fetchLikes,
	likePost,
	unlikePost,
} from '../../utils/backend/backend.utils';
import {
	FetchLikesStart,
	ToggleLikeStart,
	fetchLikesFailed,
	fetchLikesStart,
	fetchLikesSuccess,
	toggleLikeFailed,
	toggleLikeSuccess,
} from './likes.action';
import { LIKE_ACTION_TYPES } from './likes.types';
import { RootState } from '../store';
import { Post } from '../posts/posts.types';

// MARK: ---------------------- SELECTORS ----------------------

const selectUserId = (state: RootState) => state.user.user?.id ?? '';

const selectUserDisplayName = (state: RootState) =>
	state.user.user?.displayName ?? '';

const selectUserAvatar = (state: RootState) => state.user.user?.avatar ?? '';

const selectPosts = (state: RootState) => state.posts.posts;

// MARK: ---------------------- UTILS ----------------------

export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));

// MARK: ---------------------- SAGAS ----------------------
export function* toggleLikeAsync({ payload: postId }: ToggleLikeStart) {
	try {
		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		const userId = yield* select(selectUserId);
		yield* call(post.isLiked ? unlikePost : likePost, userId, postId);

		yield* put(fetchLikesStart(postId));

		yield* put(
			toggleLikeSuccess(
				updatePosts(posts, {
					...post,
					isLiked: !post.isLiked,
					likes: post.isLiked ? post.likes - 1 : post.likes + 1,
				})
			)
		);
	} catch (error) {
		yield* put(toggleLikeFailed(error as Error));
	}
}

export function* fetchLikesAsync({ payload: postId }: FetchLikesStart) {
	try {
		const likes = yield* call(fetchLikes, postId);

		yield* put(fetchLikesSuccess(likes));
	} catch (error) {
		yield* put(fetchLikesFailed(error as Error));
	}
}

// MARK: ---------------------- WATCHERS ----------------------

export function* onLikePost() {
	yield* takeLatest(LIKE_ACTION_TYPES.TOGGLE_LIKE_START, toggleLikeAsync);
}

export function* onFetchLikes() {
	yield* takeLatest(LIKE_ACTION_TYPES.FETCH_LIKES_START, fetchLikesAsync);
}
// MARK: ---------------------- ROOT POSTS SAGA ----------------------

export function* likesSaga() {
	yield* all([
		call(onLikePost),
		call(onFetchLikes),
	]);
}
