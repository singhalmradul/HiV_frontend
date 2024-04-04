import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { fetchUserPosts } from '../../utils/backend/backend.utils';
import {
	FetchUserPostsStart,
	fetchUserPostsFailed,
	fetchUserPostsSuccess,
} from './posts.action';
import { POST_ACTION_TYPES } from './posts.types';

export function* fetchUserPostsAsync({ payload: userId }: FetchUserPostsStart) {
	try {
		const posts = yield* call(fetchUserPosts, userId);
		yield* put(fetchUserPostsSuccess(posts));
	} catch (error) {
		yield* put(fetchUserPostsFailed(error as Error));
	}
}

export function* onFetchUserPosts() {
	yield* takeLatest(POST_ACTION_TYPES.FETCH_USER_POSTS_START, fetchUserPostsAsync);
}

export function* postsSaga() {
	yield* all([call(onFetchUserPosts)]);
}
