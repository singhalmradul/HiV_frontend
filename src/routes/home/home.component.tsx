import { useEffect } from 'react';

import Posts from '../../components/posts/posts.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPostsStart } from '../../store/posts/posts.action';
import { selectUserPosts } from '../../store/posts/posts.selector';

const Home = () => {

	const dispatch = useDispatch();

	const posts = useSelector(selectUserPosts)

	useEffect(() => {
			// dispatch(fetchPostsStart())
	}, []);


	return (
		<div className='home'>
			{/* <Posts posts={posts} /> */}
		</div>
	);
};

export default Home;
