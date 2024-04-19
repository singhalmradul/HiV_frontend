import { UnknownAction } from 'redux';
import { fetchCommentsFailed, fetchCommentsStart, fetchCommentsSuccess, postCommentFailed, postCommentSuccess } from './comments.action';
import { Comment} from './comments.types';

export type CommentsState = {
	readonly comments: Comment[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const COMMENTS_INITIAL_STATE: CommentsState = {
	comments: [],
	isLoading: false,
	error: null,
};

export const commentsReducer = (
	state = COMMENTS_INITIAL_STATE,
	action = {} as UnknownAction
) => {
	if (fetchCommentsStart.match(action)) {
		return { ...state, isLoading: true };
	}
	if (fetchCommentsSuccess.match(action)) {
		return { ...state, comments: action.payload, isLoading: false};
	}
	if (fetchCommentsFailed.match(action)) {
		return { ...state, error: action.payload, isLoading: false};
	}
	if (postCommentFailed.match(action)) {
		return { ...state, error: action.payload };
	}

	return state;
};
