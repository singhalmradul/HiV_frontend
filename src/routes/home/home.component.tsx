import { useEffect } from 'react';

import Posts from '../../components/posts/posts.component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedPostsStart } from '../../store/posts/posts.action';
import { selectFeedPosts } from '../../store/posts/posts.selector';
import { selectUser } from '../../store/user/user.selector';

const Home = () => {

	const dispatch = useDispatch();

	const posts = useSelector(selectFeedPosts)
	const user = useSelector(selectUser)


	useEffect(() => {
		if(user)
			dispatch(fetchFeedPostsStart(user.id))
	}, [user]);


	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Home;
