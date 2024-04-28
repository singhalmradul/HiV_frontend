import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import {
	createPost,
	fetchPosts,
} from '../../utils/backend/backend.utils';
import {
	CreatePostStart,
	FetchPostsStart,
	createPostFailed,
	createPostSuccess,
	fetchPostsFailed,
	fetchPostsSuccess,
} from './posts.action';
import { POST_ACTION_TYPES, Post } from './posts.types';
import { RootState } from '../store';
import { setDisplayModal } from '../modal/modal.action';

// MARK: ---------------------- SELECTORS ----------------------

const selectUserId = (state: RootState) => state.user.currentUser?.id ?? '';

const selectUserDisplayName = (state: RootState) =>
	state.user.currentUser?.displayName ?? '';

const selectUserAvatar = (state: RootState) => state.user.currentUser?.avatar ?? '';

const selectPosts = (state: RootState) => state.posts.posts;

// MARK: ---------------------- UTILS ----------------------

export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));

// MARK: ---------------------- SAGAS ----------------------

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
		const userDisplayName = yield* select(selectUserDisplayName);
		const userAvatar = yield* select(selectUserAvatar);
		console.log(post, typeof post);
		post.user = {
			id: userId,
			displayName: userDisplayName,
			avatar: userAvatar,
		};
		post.likesCount = 0;
		post.commentsCount = 0;
		post.isLiked = false;

		const newPosts = [post];
		newPosts.push(...posts);

		yield* put(createPostSuccess(newPosts));
		yield* put(setDisplayModal(false));
	} catch (error) {
		yield* put(createPostFailed(error as Error));
	}
}

// MARK: ---------------------- WATCHERS ----------------------

export function* onFetchPosts() {
	yield* takeLatest(POST_ACTION_TYPES.FETCH_POSTS_START, fetchPostsAsync);
}

export function* onCreatePost() {
	yield* takeLatest(POST_ACTION_TYPES.CREATE_POST_START, createPostAsync);
}

// MARK: ---------------------- ROOT POSTS SAGA ----------------------

export function* postsSaga() {
	yield* all([
		call(onFetchPosts),
		call(onCreatePost),
	]);
}
