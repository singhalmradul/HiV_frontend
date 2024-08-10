import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import { createPost, fetchPosts } from '../../utils/backend/backend.utils';
import {
	CreatePostStart,
	FetchPostsStart,
	createPostFailed,
	createPostSuccess,
	fetchPostsFailed,
	fetchPostsSuccess,
} from './posts.action';
import { POST_ACTION_TYPES, Post } from './posts.types';
import { setDisplayModal } from '../modal/modal.action';
import { selectCurrentUser, selectCurrentUserId } from '../user/user.selector';
import { selectPosts } from './posts.selector';

// MARK: ---------------------- UTILS ----------------------

export const updatePosts = (posts: Post[], post: Post) =>
	posts.map((p) => (p.id === post.id ? post : p));

// MARK: ---------------------- SAGAS ----------------------

export function* fetchPostsAsync({
	payload: { postType, userId },
}: FetchPostsStart) {
	try {
		const currentUserId = yield* select(selectCurrentUserId);
		const posts = yield* call(fetchPosts, userId, postType, currentUserId);
		yield* put(fetchPostsSuccess(posts));
	} catch (error) {
		yield* put(fetchPostsFailed(error as Error));
	}
}

export function* createPostAsync({ payload: textWithFile }: CreatePostStart) {
	try {
		const user = yield* select(selectCurrentUser);
		if (!user) throw new Error('user is null');
		const { id, displayName, avatar } = user;
		const post = yield* call(createPost, id, textWithFile);

		const posts = yield* select(selectPosts);
		post.user = {
			id,
			displayName,
			avatar,
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
	yield* all([call(onFetchPosts), call(onCreatePost)]);
}
