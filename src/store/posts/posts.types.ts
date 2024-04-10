export enum POST_ACTION_TYPES {
	FETCH_POSTS_START = 'posts/FETCH_POSTS_START',
	FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS',
	FETCH_POSTS_FAILED = 'posts/FETCH_POSTS_FAILED',
	TOGGLE_LIKE_START = 'posts/TOGGLE_LIKE_START',
	TOGGLE_LIKE_SUCCESS = 'posts/TOGGLE_LIKE_SUCCESS',
	TOGGLE_LIKE_FAILED = 'posts/TOGGLE_LIKE_FAILED',
}

export type User = {
	id: string;
	displayName: string;
	avatar: string;
};

export type Post = {
	id: string;
	user: User;
	text: string;
	image: string | null;
	likes: number;
	comments: number;
	isLiked: boolean;
};

export enum POST_TYPES  {
	USER_POSTS = 'user',
	FEED_POSTS = 'feed',
}