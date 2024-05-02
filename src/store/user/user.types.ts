export enum USER_ACTION_TYPES {
	FETCH_USER_DETIALS_START = 'user/FETCH_USER_DETAILS_START',
	FETCH_CURRENT_USER_DETAILS_SUCCESS = 'user/FETCH_CURRENT_USER_DETAILS_SUCCESS',
	FETCH_USER_DETAILS_SUCCESS = 'user/FETCH_USER_DETAILS_SUCCESS',
	FETCH_USER_DETAILS_FAILED = 'user/FETCH_USER_DETAILS_FAILED',
}

export type User = {

    id: string;
    displayName: string;
	username: string;
    avatar: string;
    bio: string;
    isFollowed: boolean;
};
