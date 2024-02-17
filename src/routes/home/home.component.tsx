import { useEffect } from 'react';

import Posts from '../../components/posts/posts.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { selectPosts } from '../../store/posts/posts.selector';

const Home = () => {

	const dispatch = useDispatch();

	const posts = useSelector(selectPosts)

	useEffect(() => {
		const fetchPosts = async () => {
			dispatch(fetchPostsStart())
		};
		fetchPosts();
	}, []);


	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Home;
