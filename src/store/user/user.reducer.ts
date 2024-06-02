import { UnknownAction } from 'redux';
import {
	fetchUserDetailsFailed,
	fetchUserDetailsStart,
	fetchUserDetailsSuccess,
	followUserSuccess,
	unfollowUserSuccess,
	resetUserState,
	updateProfileSuccess,
	updateProfileFailed,
	changeAvatarSuccess,
	fetchCurrentUserDetailsSuccess,
} from './user.action';
import { User } from './user.types';

export type UserState = {
	readonly currentUser: User | null;
	readonly user: User | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
	currentUser: null,
	user: null,
	isLoading: false,
	error: null,
};

export const userReducer = (
	state = USER_INITIAL_STATE,
	action = {} as UnknownAction
): UserState => {
	if (fetchUserDetailsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchCurrentUserDetailsSuccess.match(action)) {
		console.log('fetchCurrentUserDetailsSuccess', action.payload);
		return { ...state, currentUser: action.payload };
	}
	if (fetchUserDetailsSuccess.match(action)) {
		return { ...state, user: action.payload, isLoading: false };
	}
	if (fetchUserDetailsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
	if (followUserSuccess.match(action)) {
		return { ...state, user: action.payload };
	}
	if (unfollowUserSuccess.match(action)) {
		return { ...state, user: action.payload };
	}
	if (updateProfileSuccess.match(action)) {
		return { ...state, user: action.payload };
	}
	if (updateProfileFailed.match(action)) {
		return { ...state, error: action.payload };
	}
	if (changeAvatarSuccess.match(action)) {
		return {
			...state,
			user: { ...(state.user as User), avatar: action.payload },
		};
	}
	if (resetUserState.match(action)) {
		return { ...USER_INITIAL_STATE, currentUser: state.currentUser };
	}
	return state;
};
