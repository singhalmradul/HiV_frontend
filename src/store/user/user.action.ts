import {
	Action,
	ActionWithPayload,
	createAction,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES, User } from './user.types';

export type Reset = Action<USER_ACTION_TYPES.RESET>;

export type FetchUserDetialsStart = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETIALS_START,
	string
>;

export type FetchUserDetailsSuccess = ActionWithPayload<
	USER_ACTION_TYPES.FETCH_USER_DETAILS_SUCCESS,
	User
>;

export type SetCurrentUserId = ActionWithPayload<
	USER_ACTION_TYPES.SET_CURRENT_USER_ID,
	string
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

export type UpdateProfileStart = ActionWithPayload<
	USER_ACTION_TYPES.UPDATE_PROFILE_START,
	User
	>;

export type UpdateProfileSuccess = ActionWithPayload<
	USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS,
	User
	>;

export type UpdateProfileFailed = ActionWithPayload<
	USER_ACTION_TYPES.UPDATE_PROFILE_FAILED,
	Error
	>;

export type ChangeAvatarStart = ActionWithPayload<
	USER_ACTION_TYPES.CHANGE_AVATAR_START,
	File
	>;

export type ChangeAvatarSuccess = ActionWithPayload<
	USER_ACTION_TYPES.CHANGE_AVATAR_SUCCESS,
	string
	>;

export type ChangeAvatarFailed = ActionWithPayload<
	USER_ACTION_TYPES.CHANGE_AVATAR_FAILED,
	Error
	>;

export const resetUserState = withMatcher(
	(): Reset =>
		createAction(USER_ACTION_TYPES.RESET)
);

export const fetchUserDetailsStart = withMatcher(
	(id: string): FetchUserDetialsStart =>
		createAction(USER_ACTION_TYPES.FETCH_USER_DETIALS_START, id)
);

export const setCurrentUserId = withMatcher(
	(id: string): SetCurrentUserId =>
		createAction(USER_ACTION_TYPES.SET_CURRENT_USER_ID, id)
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

export const updateProfileStart = withMatcher(
	(user: User): UpdateProfileStart =>
		createAction(USER_ACTION_TYPES.UPDATE_PROFILE_START, user)
);

export const updateProfileSuccess = withMatcher(
	(user: User): UpdateProfileSuccess =>
		createAction(USER_ACTION_TYPES.UPDATE_PROFILE_SUCCESS, user)
);

export const updateProfileFailed = withMatcher(
	(error: Error): UpdateProfileFailed =>
		createAction(USER_ACTION_TYPES.UPDATE_PROFILE_FAILED, error)
);

export const changeAvatarStart = withMatcher(
	(file: File): ChangeAvatarStart =>
		createAction(USER_ACTION_TYPES.CHANGE_AVATAR_START, file)
);

export const changeAvatarSuccess = withMatcher(
	(avatar: string): ChangeAvatarSuccess =>
		createAction(USER_ACTION_TYPES.CHANGE_AVATAR_SUCCESS, avatar)
);

export const changeAvatarFailed = withMatcher(
	(error: Error): ChangeAvatarFailed =>
		createAction(USER_ACTION_TYPES.CHANGE_AVATAR_FAILED, error)
);