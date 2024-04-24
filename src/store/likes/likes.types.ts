export enum LIKE_ACTION_TYPES {
	LIKE_POST_START = 'likes/LIKE__POST_START',
	LIKE_POST_SUCCESS = 'likes/LIKE_POST_SUCCESS',
	LIKE_POST_FAILED = 'likes/LIKE_POST_FAILED',

	UNLIKE_POST_START = 'likes/UNLIKE__POST_START',
	UNLIKE_POST_SUCCESS = 'likes/UNLIKE_POST_SUCCESS',
	UNLIKE_POST_FAILED = 'likes/UNLIKE_POST_FAILED',
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
