import { Link, Outlet } from 'react-router-dom';
import './navigation-bar.styles.css';
const NavigationBar = () => {
	return (
		<div>
			<Outlet />
			<div className='navigation-bar-container'>
				<Link to='#'>home</Link>
				<Link to='#'>explore</Link>
				<Link to='#'>chat</Link>
				<Link to='#'>search</Link>
				<Link to='#'>notifications</Link>
				<Link to='#'>profile</Link>
			</div>
		</div>
	);
};

export default NavigationBar;
