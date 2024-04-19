export enum LIKE_ACTION_TYPES {
	TOGGLE_LIKE_START = 'likes/TOGGLE_LIKE_START',
	TOGGLE_LIKE_SUCCESS = 'likes/TOGGLE_LIKE_SUCCESS',
	TOGGLE_LIKE_FAILED = 'likes/TOGGLE_LIKE_FAILED',
	FETCH_LIKES_START = 'likes/FETCH_LIKES_START',
	FETCH_LIKES_SUCCESS = 'likes/FETCH_LIKES_SUCCESS',
	FETCH_LIKES_FAILED = 'likes/FETCH_LIKES_FAILED',
}

export type User = {
	id: string;
	displayName: string;
	avatar: string;
};

export type Like = {
	postId: string;
	user: User;
};
