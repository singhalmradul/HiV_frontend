import { UnknownAction } from 'redux';
import {
	fetchLikesFailed,
	fetchLikesStart,
	fetchLikesSuccess,
} from './likes.action';
import { Like } from './likes.types';

export type LikesState = {
	readonly likes: Like[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const LIKES_INITIAL_STATE: LikesState = {
	likes: [],
	isLoading: false,
	error: null,
};

export const likesReducer = (
	state = LIKES_INITIAL_STATE,
	action = {} as UnknownAction
) => {
	if (fetchLikesStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchLikesSuccess.match(action)) {
		return { ...state, likes: action.payload, isLoading: false };
	}
	if (fetchLikesFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}

	return state;
};
