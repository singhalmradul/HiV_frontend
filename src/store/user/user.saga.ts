import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	FetchUserDetialsStart,
	fetchUserDetailsFailed,
	fetchCurrentUserDetailsSuccess,
	fetchUserDetailsSuccess,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import { fetchUser } from '../../utils/backend/backend.utils';

let currentUserId: string | null = null;
export function* fetchUserAsync({
	payload: { id, isCurrentUser },
}: FetchUserDetialsStart) {
	try {
		if (isCurrentUser) {
			currentUserId = id;
		}
		const user = yield* call(fetchUser, id, currentUserId as string);
		if (isCurrentUser) {
			yield* put(fetchCurrentUserDetailsSuccess(user));
		}
		yield* put(fetchUserDetailsSuccess(user));
	} catch (error) {
		yield* put(fetchUserDetailsFailed(error as Error));
	}
}

export function* onFetchUserDetailsStart() {
	yield* takeLatest(USER_ACTION_TYPES.FETCH_USER_DETIALS_START, fetchUserAsync);
}

export function* userSaga() {
	yield* all([call(onFetchUserDetailsStart)]);
}
