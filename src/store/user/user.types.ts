export enum USER_ACTION_TYPES {
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    USER_SIGN_IN_SUCCESS = 'user/FETCH_USER_SUCCESS',
    USER_SIGN_IN_FAILED = 'user/FETCH_USER_FAILED'
}

export type User = {
	id: string;
	username: string;
	profilePicture: string;
};
