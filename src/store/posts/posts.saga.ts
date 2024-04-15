import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import {
	createPost,
	fetchPosts,
	likePost,
	unlikePost,
} from '../../utils/backend/backend.utils';
import {
	CreatePostStart,
	FetchPostsStart,
	ToggleLikeStart,
	createPostFailed,
	createPostSuccess,
	fetchPostsFailed,
	fetchPostsSuccess,
	toggleLikeFailed,
	toggleLikeSuccess,
} from './posts.action';
import { POST_ACTION_TYPES, Post } from './posts.types';
import { RootState } from '../store';

// ---------------------- SELECTORS ----------------------
const selectUserId = (state: RootState) => state.user.user?.id ?? '';

const selectPosts = (state: RootState) => state.posts.posts;
// ---------------------- UTILS ----------------------
export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));
// ---------------------- SAGAS ----------------------
export function* fetchPostsAsync({ payload: postType }: FetchPostsStart) {
	try {
		const userId = yield* select(selectUserId);
		const posts = yield* call(fetchPosts, userId, postType);

		yield* put(fetchPostsSuccess(posts));
	} catch (error) {
		yield* put(fetchPostsFailed(error as Error));
	}
}

export function* createPostAsync({ payload: textWithFile }: CreatePostStart) {
	try {
		const userId = yield* select(selectUserId);
		const post = yield* call(createPost, userId, textWithFile);
		const posts = yield* select(selectPosts);

		const newPosts = [post];
		newPosts.push(...posts);

		yield* put(createPostSuccess(newPosts));
	} catch (error) {
		yield* put(createPostFailed(error as Error));
	}
}

export function* toggleLikeAsync({ payload: postId }: ToggleLikeStart) {
	try {
		const posts = yield* select(selectPosts);
		const post = posts.find((post) => post.id === postId);

		if (!post) return;

		const userId = yield* select(selectUserId);
		yield* call(post.isLiked ? unlikePost : likePost, userId, postId);

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
// ---------------------- WATCHERS ----------------------
export function* onFetchPosts() {
	yield* takeLatest(POST_ACTION_TYPES.FETCH_POSTS_START, fetchPostsAsync);
}

export function* onCreatePost() {
	yield* takeLatest(POST_ACTION_TYPES.CREATE_POST_START, createPostAsync);
}
export function* onLikePost() {
	yield* takeLatest(POST_ACTION_TYPES.TOGGLE_LIKE_START, toggleLikeAsync);
}
// ---------------------- ROOT POSTS SAGA ----------------------
export function* postsSaga() {
	yield* all([call(onFetchPosts), call(onLikePost), call(onCreatePost)]);
}
