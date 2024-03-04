import { all, call, getContext, put, takeLatest } from 'typed-redux-saga/macro';
import { userSignInFailed, userSignInSuccess } from './user.action';
import { USER_ACTION_TYPES } from './user.types';
import { Auth0ContextInterface } from '@auth0/auth0-react';

export function* authenticateUserAsync() {
	try {
		const auth0context = yield* getContext<Auth0ContextInterface>(
			'auth0Context'
		);

		const { user: auth0user, loginWithRedirect } = auth0context;

		if (auth0user) {
			const user = {
				id: auth0user.id as string,
				username: auth0user.name as string,
				profilePicture: auth0user.picture as string,
			};
			yield* put(userSignInSuccess(user));
		} else {
			yield call(loginWithRedirect, {
				appState: {
					returnTo: window.location.pathname,
				},
			});
		}
	} catch (error) {
		yield* put(userSignInFailed(error as Error));
	}
}

export function* onCheckUserSession() {
	yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, authenticateUserAsync);
}

export function* userSaga() {
	yield* all([call(onCheckUserSession)]);
}
