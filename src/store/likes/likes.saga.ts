import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import {
	fetchLikes,
	likePost,
	unlikePost,
} from '../../utils/backend/backend.utils';
import {
	FetchLikesStart,
	LikePostStart,
	fetchLikesFailed,
	fetchLikesStart,
	fetchLikesSuccess,
	likePostFailed,
	likePostSuccess,
	unlikePostFailed,
	unlikePostSuccess,
} from './likes.action';
import { LIKE_ACTION_TYPES, Like } from './likes.types';
import { RootState } from '../store';
import { Post } from '../posts/posts.types';

// MARK: ---------------------- SELECTORS ----------------------

const selectUser = (state: RootState) => state.user.user;

const selectPosts = (state: RootState) => state.posts.posts;

// MARK: ---------------------- UTILS ----------------------

export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));

// MARK: ---------------------- SAGAS ----------------------
export function* likePostAsync({ payload: postId }: LikePostStart) {
	try {
		const user = yield* select(selectUser);

		if (!user) return;

		const {id, displayName, avatar} = user;

		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		yield* call(likePost, user.id, postId);

		const like:Like =  { postId, user: { id, displayName, avatar } };

		yield* put(
			likePostSuccess(
				updatePosts(posts, {
					...post,
					isLiked: !post.isLiked,
					likesCount: post.likesCount + 1,
					likes: post.likes ? [...post.likes, like] : [like],
				})
			)
		);
	} catch (error) {
		yield* put(likePostFailed(error as Error));
	}
}

export function* unlikePostAsync({ payload: postId }: LikePostStart) {
	try {
		const user = yield* select(selectUser);

		if (!user) return;

		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		yield* call(unlikePost, user.id, postId);

		yield* put(fetchLikesStart(postId));

		yield* put(
			unlikePostSuccess(
				updatePosts(posts, {
					...post,
					isLiked: !post.isLiked,
					likesCount: post.likesCount - 1,
					likes: post.likes?.filter((like) => like.user.id !== user.id),
				})
			)
		);
	} catch (error) {
		yield* put(unlikePostFailed(error as Error));
	}
}

export function* fetchLikesAsync({ payload: postId }: FetchLikesStart) {
	try {
		const likes = yield* call(fetchLikes, postId);


		const posts = yield * select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		yield*
			put(
				fetchLikesSuccess(
					updatePosts(posts, {
						...post,
						likes,
					})
				)
			);
	} catch (error) {
		yield* put(fetchLikesFailed(error as Error));
	}
}

// MARK: ---------------------- WATCHERS ----------------------

export function* onLikePost() {
	yield* takeLatest(LIKE_ACTION_TYPES.LIKE_POST_START, likePostAsync);
}

export function* onUnlikePost() {
	yield* takeLatest(LIKE_ACTION_TYPES.UNLIKE_POST_START, unlikePostAsync);
}
export function* onFetchLikes() {
	yield* takeLatest(LIKE_ACTION_TYPES.FETCH_LIKES_START, fetchLikesAsync);
}
// MARK: ---------------------- ROOT POSTS SAGA ----------------------

export function* likesSaga() {
	yield* all([
		call(onLikePost),
		call(onUnlikePost),
		call(onFetchLikes),
	]);
}
