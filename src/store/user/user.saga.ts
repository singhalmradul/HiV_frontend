import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import {
	FetchUserDetialsStart,
	fetchUserDetailsFailed,
	fetchCurrentUserDetailsSuccess,
	fetchUserDetailsSuccess,
	followUserSuccess,
	followUserFailed,
	unfollowUserSuccess,
	unfollowUserFailed,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import { fetchUser, followUser, unfollowUser } from '../../utils/backend/backend.utils';
import {
	selectCurrentUserId,
	selectUser,
} from './user.selector';

export function* fetchUserAsync({
	payload: { id, isCurrentUser },
}: FetchUserDetialsStart) {
	try {
		const currentUserId = yield* select(selectCurrentUserId);
		const user = yield* call(fetchUser, id, currentUserId);
		if (isCurrentUser) {
			yield* put(fetchCurrentUserDetailsSuccess(user));
		} else {
			yield* put(fetchUserDetailsSuccess(user));
		}
	} catch (error) {
		yield* put(fetchUserDetailsFailed(error as Error));
	}
}

export function* followUserAsync() {
	try {
		const user = (yield* select(selectUser));
		if (!user) throw new Error("user is null");

		const currentUserId = yield* select(selectCurrentUserId);
		yield* call(followUser, currentUserId, user.id);

		yield* put(followUserSuccess({ ...user, isFollowed: true }));
	} catch (error) {
		yield* put(followUserFailed(error as Error));
	}
}

export function* unfollowUserAsync() {
	try {
		const user = yield * select(selectUser);
		if (!user) throw new Error('user is null');

		const currentUserId = yield* select(selectCurrentUserId);
		yield * call(unfollowUser, currentUserId, user.id);

		yield* put(unfollowUserSuccess({ ...user, isFollowed: false }));
	} catch (error) {
		yield* put(unfollowUserFailed(error as Error));
	}
}

export function* onFetchUserDetailsStart() {
	yield* takeLatest(USER_ACTION_TYPES.FETCH_USER_DETIALS_START, fetchUserAsync);
}

export function* onFollowUserStart() {
	yield* takeLatest(USER_ACTION_TYPES.FOLLOW_USER_START, followUserAsync);
}

export function* onUnfollowUserStart() {
	yield* takeLatest(USER_ACTION_TYPES.UNFOLLOW_USER_START, unfollowUserAsync);
}

export function* userSaga() {
	yield* all([call(onFetchUserDetailsStart), call(onFollowUserStart), call(onUnfollowUserStart)]);
}
