import { useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Spinner from './components/spinner/spinner.component';

import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import Explore from './routes/explore/explore.component';
import Callback from './routes/callback/callback.component';

const App = () => {

	const {
		isLoading,
		loginWithRedirect,
		isAuthenticated
	} = useAuth0();

	useEffect(() => {
		console.log(isAuthenticated);
		if (!isAuthenticated) {
			const intiateUserLogin = async () => {
				await loginWithRedirect();
			};
			intiateUserLogin();
		}
	}, []);
	if (isLoading) return <Spinner />;
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path="callback/" element={<Callback />} />
				<Route path='explore/' element={<Explore />} />
			</Route>
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default App;
