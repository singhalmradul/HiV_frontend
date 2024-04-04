import { UnknownAction } from 'redux';
import {
	fetchUserPostsFailed,
	fetchUserPostsStart,
	fetchUserPostsSuccess,
} from './posts.action';
import { Post } from './posts.types';

export type PostsState = {
	readonly userPosts: Post[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const POSTS_INITIAL_STATE: PostsState = {
	userPosts: [],
	isLoading: false,
	error: null,
};

export const postsReducer = (
	state = POSTS_INITIAL_STATE,
	action = {} as UnknownAction
) => {
	if (fetchUserPostsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchUserPostsSuccess.match(action)) {
		return { ...state, userPosts: action.payload, isLoading: false };
	}
	if (fetchUserPostsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
	return state;
};
