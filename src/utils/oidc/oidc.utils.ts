import { AuthProviderProps, User } from 'oidc-react';

export const oidcConfig: AuthProviderProps = {
	authority: process.env.REACT_APP_AUTH_AUTHORITY,
	clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
	redirectUri:
        process.env.REACT_APP_AUTH_REDIRECT_URI ?? window.location.origin.concat('/callback'),
    onSignIn: async (user: User | null) => {
    console.log('user', user)
    window.location.href = '/';
}

};
