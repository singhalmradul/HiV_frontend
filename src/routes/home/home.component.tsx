import { useEffect } from 'react';

import Posts from '../../components/posts/posts.component';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../store/posts/posts.selector';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { POST_TYPE } from '../../store/posts/posts.types';

const Home = () => {

	const dispatch = useDispatch();

	const posts = useSelector(selectPosts)

	useEffect(() => {
		dispatch(fetchPostsStart(POST_TYPE.FEED_POSTS))
		// eslint-disable-next-line
	}, []);


	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Home;
