import { useSelector } from 'react-redux';

import { Post as PostType } from '../../store/posts/posts.types';
import { selectPostsIsLoading } from '../../store/posts/posts.selector';
import Post from '../post/post.component';
import Spinner from '../spinner/spinner.component';

import './posts.styles.css';

type PostProps = { posts: PostType[]; };
const Posts = ({ posts }: PostProps) => {

	const isLoading = useSelector(selectPostsIsLoading);
	console.log('posts', posts);
	return isLoading ? <Spinner /> : (
		<div className='posts'>
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
};

export default Posts;
