import { useAuth0 } from '@auth0/auth0-react';
import { User } from '../../store/user/user.types';

const useUserAuth = () => {
	const { loginWithRedirect, isAuthenticated, user, error } = useAuth0();

	const intiateUserLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/',
			},
		});
	};

	const authenticateUser = () => {
		if (!isAuthenticated) {
			intiateUserLogin();
		}
	};

	const getUser = () => {
		if (!user) {
			throw new Error(error?.message ?? 'User not found');
		}
		const { id, name, picture } = user;
		return {
			id,
			username: name,
			profilePicture: picture,
		} as User;
	};

	return { intiateUserLogin, authenticateUser, getUser };
};

export default useUserAuth;