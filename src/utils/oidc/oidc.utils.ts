import { AuthProviderProps } from 'oidc-react';

export const oidcConfig: AuthProviderProps = {
	authority: process.env.REACT_APP_AUTH_AUTHORITY,
	clientId: process.env.REACT_APP_AUTH_CLIENT_ID ?? 'react',
	redirectUri:
		process.env.REACT_APP_AUTH_REDIRECT_URI ??
		window.location.origin.concat('/callback'),
	scope: 'openid',
};
