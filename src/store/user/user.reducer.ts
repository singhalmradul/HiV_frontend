import { UnknownAction } from 'redux';
import {
	fetchUserDetailsFailed,
	fetchUserDetailsStart,
	setCurrentUserId,
	fetchUserDetailsSuccess,
	followUserSuccess,
	unfollowUserSuccess,
	resetUserState,
} from './user.action';
import { User } from './user.types';

export type UserState = {
	readonly currentUserId: string | null;
	readonly user: User | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
	currentUserId: null,
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
	if (setCurrentUserId.match(action)) {
		return { ...state, currentUserId: action.payload, isLoading: false };
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
	if (resetUserState.match(action)) {
		return { ...USER_INITIAL_STATE, currentUserId: state.currentUserId };
	}
	return state;
};
