import { all, call, put, select, takeLatest } from 'typed-redux-saga/macro';
import {
	FetchUserDetialsStart,
	fetchUserDetailsFailed,
	fetchUserDetailsSuccess,
	followUserSuccess,
	followUserFailed,
	unfollowUserSuccess,
	unfollowUserFailed,
	UpdateProfileStart,
	updateProfileSuccess,
	updateProfileFailed,
	changeAvatarSuccess,
	changeAvatarFailed,
	fetchCurrentUserDetailsSuccess,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import {
	fetchUser,
	followUser,
	unfollowUser,
	updateAvatar,
	updateUser,
} from '../../utils/backend/backend.utils';
import { selectCurrentUserId, selectUser } from './user.selector';

export function* fetchUserAsync({ payload: { id, isCurrentUser } }: FetchUserDetialsStart) {
	try {
		const currentUserId = yield* select(selectCurrentUserId);
		const user = yield* call(fetchUser, id, currentUserId);
		if (isCurrentUser) {
			yield* put(fetchCurrentUserDetailsSuccess(user));
		}
		yield* put(fetchUserDetailsSuccess(user));
	} catch (error) {
		yield* put(fetchUserDetailsFailed(error as Error));
	}
}

export function* followUserAsync() {
	try {
		const user = yield* select(selectUser);
		if (!user) throw new Error('user is null');

		const currentUserId = yield* select(selectCurrentUserId);
		yield* call(followUser, currentUserId, user.id);

		yield* put(followUserSuccess({ ...user, isFollowed: true }));
	} catch (error) {
		yield* put(followUserFailed(error as Error));
	}
}

export function* unfollowUserAsync() {
	try {
		const user = yield* select(selectUser);
		if (!user) throw new Error('user is null');

		const currentUserId = yield* select(selectCurrentUserId);
		yield* call(unfollowUser, currentUserId, user.id);

		yield* put(unfollowUserSuccess({ ...user, isFollowed: false }));
	} catch (error) {
		yield* put(unfollowUserFailed(error as Error));
	}
}

export function* updateProfileAsync({ payload: user }: UpdateProfileStart) {
	try {
		const currentUserId = yield* select(selectCurrentUserId);
		const updatedUser = yield* call(updateUser, currentUserId, user);
		yield* put(updateProfileSuccess(updatedUser));
	} catch (error) {
		yield* put(updateProfileFailed(error as Error));
	}
}

export function* changeAvatar({ payload: file }: any) {
	try {
		const currentUserId = yield* select(selectCurrentUserId);
		const url = yield* call(updateAvatar, currentUserId, { avatar: file });
		yield* put(changeAvatarSuccess(url));
	} catch (error) {
		yield* put(changeAvatarFailed(error as Error));
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

export function* onUpdateProfileStart() {
	yield* takeLatest(USER_ACTION_TYPES.UPDATE_PROFILE_START, updateProfileAsync);
}

export function* onChangeAvatarStart() {
	yield* takeLatest(USER_ACTION_TYPES.CHANGE_AVATAR_START, changeAvatar);
}

export function* userSaga() {
	yield* all([
		call(onFetchUserDetailsStart),
		call(onFollowUserStart),
		call(onUnfollowUserStart),
		call(onUpdateProfileStart),
		call(onChangeAvatarStart),
	]);
}
