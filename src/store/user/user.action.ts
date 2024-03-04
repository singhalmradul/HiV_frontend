import {
	Action,
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES, User } from './user.types';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type UserSignInSuccess = ActionWithPayload<
	USER_ACTION_TYPES.USER_SIGN_IN_SUCCESS,
	User
>;

export type UserSignInFailed = ActionWithPayload<
	USER_ACTION_TYPES.USER_SIGN_IN_FAILED,
	Error
>;

export type UserAction =
	| CheckUserSession
	| UserSignInSuccess
	| UserSignInFailed;

export const checkUserSession = withMatcher(
	(): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const userSignInSuccess = withMatcher(
	(user:User): UserSignInSuccess =>
		createAction(USER_ACTION_TYPES.USER_SIGN_IN_SUCCESS, user)
);

export const userSignInFailed = withMatcher(
	(error: Error): UserSignInFailed =>
		createAction(USER_ACTION_TYPES.USER_SIGN_IN_FAILED, error)
);
