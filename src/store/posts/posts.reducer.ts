import { UnknownAction } from 'redux';
import {
	fetchFeedPostsFailed,
	fetchFeedPostsStart,
	fetchFeedPostsSuccess,
	fetchUserPostsFailed,
	fetchUserPostsStart,
	fetchUserPostsSuccess,
} from './posts.action';
import { Post } from './posts.types';

export type PostsState = {
	readonly feedPosts: Post[];
	readonly userPosts: Post[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const POSTS_INITIAL_STATE: PostsState = {
	feedPosts: [],
	userPosts: [],
	isLoading: false,
	error: null,
};

export const postsReducer = (
	state = POSTS_INITIAL_STATE,
	action = {} as UnknownAction
) => {
	if (fetchFeedPostsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchFeedPostsSuccess.match(action)) {
		return { ...state, feedPosts: action.payload, isLoading: false };
	}
	if (fetchFeedPostsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
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
