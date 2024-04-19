export enum COMMENT_ACTION_TYPES {
	POST_COMMENT_START = 'comments/POST_COMMENT_START',
	POST_COMMENT_SUCCESS = 'comments/POST_COMMENT_SUCCESS',
	POST_COMMENT_FAILED = 'comments/POST_COMMENT_FAILED',
	FETCH_COMMENTS_START = 'comments/FETCH_COMMENTS_START',
	FETCH_COMMENTS_SUCCESS = 'comments/FETCH_COMMENTS_SUCCESS',
	FETCH_COMMENTS_FAILED = 'comments/FETCH_COMMENTS_FAILED',
}

export type User = {
	id: string;
	displayName: string;
	avatar: string;
};
export type Comment = {
	id: string;
	user: User;
	text: string;
};