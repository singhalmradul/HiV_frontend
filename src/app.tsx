import { Navigate, Route, Routes } from 'react-router-dom';

import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import Explore from './routes/explore/explore.component';
import Callback from './routes/callback/callback.component';
import Profiles from './routes/profiles/profiles.component';


const App = () => {
	return (

		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='explore/' element={<Explore />} />
				<Route path="callback/" element={<Callback />} />
				<Route path='profile/*' element={<Profiles />} />
			</Route>
			<Route path='*' element={<Navigate to='/' replace />} />
		</Routes>
	);
};

export default App;
