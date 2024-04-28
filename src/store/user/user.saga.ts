import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import {
	FetchUserDetialsStart,
	fetchUserDetailsFailed,
	fetchUserDetailsSuccess,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import { fetchUser } from '../../utils/backend/backend.utils';

export function* fetchUserAsync({ payload: { id } }: FetchUserDetialsStart) {
	try {
		const user = yield* call(fetchUser, id);
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
