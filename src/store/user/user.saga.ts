import { all, call, getContext, put, takeLatest } from 'typed-redux-saga/macro';
import { userSignInFailed, userSignInSuccess } from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import { AuthContextProps } from 'oidc-react';

export function* authenticateUserAsync() {

	const { signIn } = yield* getContext<AuthContextProps>('AuthContext');

	yield* call(signIn);
}

export function* onCheckUserSession() {
	yield* takeLatest(
		USER_ACTION_TYPES.CHECK_USER_SESSION,
		authenticateUserAsync
	);
}

export function* userSaga() {
	yield* all([call(onCheckUserSession)]);
}
