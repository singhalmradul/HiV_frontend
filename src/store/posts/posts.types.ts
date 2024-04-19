export enum POST_ACTION_TYPES {
	FETCH_POSTS_START = 'posts/FETCH_POSTS_START',
	FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS',
	FETCH_POSTS_FAILED = 'posts/FETCH_POSTS_FAILED',
	CREATE_POST_START = 'posts/CREATE_POST_START',
	CREATE_POST_SUCCESS = 'posts/CREATE_POST_SUCCESS',
	CREATE_POST_FAILED = 'posts/CREATE_POST_FAILED',
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
	embed: string | null;
	likes: number;
	comments: number;
	isLiked: boolean;
};

export enum POST_TYPES  {
	USER_POSTS = 'user',
	FEED_POSTS = 'feed',
}