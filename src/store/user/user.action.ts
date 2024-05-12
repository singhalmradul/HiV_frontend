import {
	Action,
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES, User } from './user.types';

type FetchUserDetailsStartParams = {
	isCurrentUser: boolean;
	id: string;
};
export type FetchUserDetialsStart = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETIALS_START,
	FetchUserDetailsStartParams
>;

export type FetchUserDetailsSuccess = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETAILS_SUCCESS,
	User
>;

export type FetchCurrentUserDetailsSuccess = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_CURRENT_USER_DETAILS_SUCCESS,
	User
>;

export type FetchUserDetailsFailed = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETAILS_FAILED,
	Error
>;

export type FollowUserStart = Action<USER_ACTION_TYPES.FOLLOW_USER_START>;

export type FollowUserSuccess = ActionWithPayload<
	USER_ACTION_TYPES.FOLLOW_USER_SUCCESS,
	User
>;

export type FollowUserFailed = ActionWithPayload<
	USER_ACTION_TYPES.FOLLOW_USER_FAILED,
	Error
>;

export type UnfollowUserStart = Action<USER_ACTION_TYPES.UNFOLLOW_USER_START>;

export type UnfollowUserSuccess = ActionWithPayload<
	USER_ACTION_TYPES.UNFOLLOW_USER_SUCCESS,
	User
>;

export type UnfollowUserFailed = ActionWithPayload<
	USER_ACTION_TYPES.UNFOLLOW_USER_FAILED,
	Error
>;

export type UserAction =
	| FetchUserDetialsStart
	| FetchUserDetailsSuccess
	| FetchUserDetailsFailed
	| FetchCurrentUserDetailsSuccess;

export const fetchUserDetailsStart = withMatcher(
	(userId: string, isCurrentUser = false): FetchUserDetialsStart =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETIALS_START, {
			id: userId,
			isCurrentUser,
		})
);

export const fetchCurrentUserDetailsSuccess = withMatcher(
	(user: User): FetchCurrentUserDetailsSuccess =>
		createAction(USER_ACTION_TYPES.FETCH_CURRENT_USER_DETAILS_SUCCESS, user)
);

export const fetchUserDetailsSuccess = withMatcher(
	(user: User): FetchUserDetailsSuccess =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETAILS_SUCCESS, user)
);

export const fetchUserDetailsFailed = withMatcher(
	(error: Error): FetchUserDetailsFailed =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETAILS_FAILED, error)
);

export const followUserStart = withMatcher(
	(): FollowUserStart =>
		createAction(USER_ACTION_TYPES.FOLLOW_USER_START)
);

export const followUserSuccess = withMatcher(
	(user: User): FollowUserSuccess =>
		createAction(USER_ACTION_TYPES.FOLLOW_USER_SUCCESS, user)
);

export const followUserFailed = withMatcher(
	(error: Error): FollowUserFailed =>
		createAction(USER_ACTION_TYPES.FOLLOW_USER_FAILED, error)
);

export const unfollowUserStart = withMatcher(
	(): UnfollowUserStart =>
		createAction(USER_ACTION_TYPES.UNFOLLOW_USER_START)
);

export const unfollowUserSuccess = withMatcher(
	(user: User): UnfollowUserSuccess =>
		createAction(USER_ACTION_TYPES.UNFOLLOW_USER_SUCCESS, user)
);

export const unfollowUserFailed = withMatcher(
	(error: Error): UnfollowUserFailed =>
		createAction(USER_ACTION_TYPES.UNFOLLOW_USER_FAILED, error)
);
