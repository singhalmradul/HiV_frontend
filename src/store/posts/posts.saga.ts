import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { fetchPosts } from '../../utils/backend/backend.utils';
import { fetchPostsFailed, fetchPostsSuccess } from './posts.action';
import { POST_ACTION_TYPES } from './posts.types';

export function* fetchPostsAsync() {
	try {
		const posts = yield* call(fetchPosts);
		yield* put(fetchPostsSuccess(posts));
	} catch (error) {
		yield* put(fetchPostsFailed(error as Error));
	}
}

export function* onFetchPosts() {
	yield* takeLatest(POST_ACTION_TYPES.FETCH_POSTS_START, fetchPostsAsync);
}

export function* postsSaga() {
	yield* all([call(onFetchPosts)]);
}
