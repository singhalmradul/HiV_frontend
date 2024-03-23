export const oidcConfig = {
	onSignIn: async (user: any) => {
        alert('You just signed in, congratz! Check out the console!');
        window.location.href = '/';
	},
	authority: process.env.REACT_APP_AUTH_AUTHORITY,
	clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
	// responseType: 'id_token',
	redirectUri:
		process.env.REACT_APP_AUTH_REDIRECT_URI ?? window.location.origin,
};
