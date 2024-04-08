import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { fetchFeedPosts, fetchUserPosts } from '../../utils/backend/backend.utils';
import {
	FetchUserPostsStart,
	fetchFeedPostsFailed,
	fetchFeedPostsSuccess,
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

export function* fetchFeedPostsAsync({ payload: userId }: FetchUserPostsStart) {
	try {
		const posts = yield* call(fetchFeedPosts, userId);
		yield* put(fetchFeedPostsSuccess(posts));
	} catch (error) {
		yield* put(fetchFeedPostsFailed(error as Error));
	}
}

export function* onFetchUserPosts() {
	yield* takeLatest(
		POST_ACTION_TYPES.FETCH_USER_POSTS_START,
		fetchUserPostsAsync
	);
}

export function* onFetchFeedPosts() {
	yield* takeLatest(
		POST_ACTION_TYPES.FETCH_FEED_POSTS_START,
		fetchFeedPostsAsync
	);
}

export function* postsSaga() {
	yield* all([call(onFetchUserPosts), call(onFetchFeedPosts)]);
}
