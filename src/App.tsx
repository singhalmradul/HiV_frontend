import { Route, Routes } from 'react-router-dom';
import NavigationBar from './routes/navigation-bar/navigation-bar.component';
import Home from './routes/home/home.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				{/* <Route path='explore ' */}
			</Route>
		</Routes>
	);
};

export default App;
