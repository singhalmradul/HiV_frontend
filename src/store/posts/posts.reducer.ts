import { UnknownAction } from 'redux';
import {
	fetchPostsFailed,
	fetchPostsStart,
	fetchPostsSuccess,
} from './posts.action';
import { Post } from './posts.types';

export type PostsState = {
	readonly posts: Post[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const POSTS_INITIAL_STATE: PostsState = {
	posts: [],
	isLoading: false,
	error: null,
};

export const postsReducer = (
	state = POSTS_INITIAL_STATE,
	action = {} as UnknownAction
) => {
	if (fetchPostsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchPostsSuccess.match(action)) {
		return { ...state, posts: action.payload, isLoading: false };
	}
	if (fetchPostsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
	return state;
};
