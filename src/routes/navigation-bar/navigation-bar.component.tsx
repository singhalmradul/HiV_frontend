import { Link, Outlet } from 'react-router-dom';

import './navigation-bar.styles.css';

const NavigationBar = () => {
	return (
		<div>
			<Outlet />
			<div className='navigation-bar-container'>
				<Link to='/'>home</Link>
				<Link to='/explore'>explore</Link>
				<Link to='/profile'>profile</Link>
			</div>
		</div>
	);
};

export default NavigationBar;
