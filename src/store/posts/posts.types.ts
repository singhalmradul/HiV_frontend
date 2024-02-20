export enum POST_ACTION_TYPES {
    FETCH_POSTS_START = 'posts/FETCH_POSTS_START',
    FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILED = 'posts/FETCH_POSTS_FAILED'
}

export type User = {
	id: string;
	username: string;
	profilePicture: string;
};

export type Post = {
	id: string;
	user: User;
	text: string;
	image: string | null;
	highFives: number;
	comments: number;
	shares: number;
};