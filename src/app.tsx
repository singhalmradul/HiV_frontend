import { Navigate, Route, Routes } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';

import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import Explore from './routes/explore/explore.component';
import Callback from './routes/callback/callback.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'oidc-react';
import { fetchUserDetailsStart } from './store/user/user.action';
import Profile from './routes/profile/profile.component';

const App = () => {

	const dispatch = useDispatch();
	const { isLoading, signIn, userData } = useAuth();

	useEffect(() => {

		if (!isLoading && !userData) {
			signIn();
		}

		if (userData) {
			dispatch(fetchUserDetailsStart(userData.profile.sub));
		}
	}, [isLoading, userData]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="callback/" element={<Callback />} />
				<Route path='explore/' element={<Explore />} />
				<Route path='profile/' element={<Profile />} />
			</Route>
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default App;
