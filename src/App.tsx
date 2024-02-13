import { Route, Routes } from 'react-router-dom';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';
import Explore from './routes/explore/explore.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='explore/' element={<Explore />} />
			</Route>
		</Routes>
	);
};

export default App;
