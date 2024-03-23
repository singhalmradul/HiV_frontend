import { Navigate, Route, Routes } from 'react-router-dom';

import Spinner from './components/spinner/spinner.component';

import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import Explore from './routes/explore/explore.component';
import Callback from './routes/callback/callback.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
	}, []);

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
