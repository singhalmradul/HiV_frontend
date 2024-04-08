export enum POST_ACTION_TYPES {
	FETCH_USER_POSTS_START = 'posts/FETCH_USER_POSTS_START',
	FETCH_USER_POSTS_SUCCESS = 'posts/FETCH_USER_POSTS_SUCCESS',
	FETCH_USER_POSTS_FAILED = 'posts/FETCH_USER_POSTS_FAILED',
	FETCH_FEED_POSTS_START = 'posts/FETCH_FEED_POSTS_START',
	FETCH_FEED_POSTS_SUCCESS = 'posts/FETCH_FEED_POSTS_SUCCESS',
	FETCH_FEED_POSTS_FAILED = 'posts/FETCH_FEED_POSTS_FAILED',
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
};