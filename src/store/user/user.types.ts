export enum USER_ACTION_TYPES {

    FETCH_USER_DETIALS_START = 'user/FETCH_USER_DETAILS_START',
    FETCH_USER_DETAILS_SUCCESS = 'user/FETCH_USER_DETAILS_SUCCESS',
    FETCH_USER_DETAILS_FAILED = 'user/FETCH_USER_DETAILS_FAILED',
}

export type User = {

	id: string;
	username: string;
	profilePicture: string;
};
