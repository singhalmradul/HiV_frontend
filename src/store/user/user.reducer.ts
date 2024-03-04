import { UnknownAction } from 'redux';
import {
	userSignInFailed,
	checkUserSession,
	userSignInSuccess,
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
	if (checkUserSession.match(action)) {
		return { ...state, isLoading: true };
	}
	if (userSignInSuccess.match(action)) {
		return { ...state, user: action.payload, isLoading: false };
	}
	if (userSignInFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
	return state;
};
