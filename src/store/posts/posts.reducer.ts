import { UnknownAction } from 'redux';
import {
	createPostFailed,
	createPostSuccess,
	fetchPostsFailed,
	fetchPostsStart,
	fetchPostsSuccess,
} from './posts.action';
import { Post } from './posts.types';
import { fetchLikesSuccess, likePostSuccess, unlikePostSuccess } from '../likes/likes.action';
import {
	fetchCommentsSuccess,
	postCommentSuccess,
} from '../comments/comments.action';

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
	if (likePostSuccess.match(action)) {
		return { ...state, posts: action.payload };
	}
	if (unlikePostSuccess.match(action)) {
		return { ...state, posts: action.payload };
	}
	if (postCommentSuccess.match(action)) {
		return { ...state, posts: action.payload };
	}
	if (fetchCommentsSuccess.match(action)) {
		return { ...state, posts: action.payload };
	}
	if (fetchLikesSuccess.match(action)) {
		return { ...state, posts: action.payload };
	}
	if (fetchPostsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchPostsSuccess.match(action)) {
		return { ...state, posts: action.payload, isLoading: false };
	}
	if (fetchPostsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false };
	}
	if (createPostSuccess.match(action)) {
		return { ...state, posts: action.payload };
	}
	if (createPostFailed.match(action)) {
		return { ...state, error: action.payload };
	}

	return state;
};
