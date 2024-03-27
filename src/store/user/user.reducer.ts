import { UnknownAction } from 'redux';
import {
	fetchUserDetailsFailed,
	fetchUserDetailsStart,
	fetchUserDetailsSuccess,
} from './user.action';
import { User } from './user.types';

export type UserState = {
	readonly user: User | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const USER_INITIAL_STATE: UserState = {
	user: null,
	isLoading: false,
	error: null,
};

export const userReducer = (
	state = USER_INITIAL_STATE,
	action = {} as UnknownAction
) => {
	if (fetchUserDetailsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchUserDetailsSuccess.match(action)) {
		return { ...state, user: action.payload, isLoading: false };
	}
	if (fetchUserDetailsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
	return state;
};
