import { useDispatch, useSelector } from 'react-redux';
import Posts from '../../components/posts/posts.component';
import { POST_TYPES, Post, User } from '../../store/posts/posts.types';
import { selectPosts } from '../../store/posts/posts.selector';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { useEffect } from 'react';

const Explore = () => {

	const dispatch = useDispatch();

	const posts = useSelector(selectPosts);


	useEffect(() => {
		dispatch(fetchPostsStart(POST_TYPES.EXPLORE_POSTS));
	}, []);

	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Explore;
