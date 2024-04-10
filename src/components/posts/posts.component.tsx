import { useSelector } from 'react-redux';
import { Post as PostType } from '../../store/posts/posts.types';
import Post from '../post/post.component';
import './posts.styles.css';
import { selectPostsIsLoading } from '../../store/posts/posts.selector';
import Spinner from '../spinner/spinner.component';

type PostProps = { posts: PostType[]; };
const Posts = ({ posts }: PostProps) => {

	const isLoading = useSelector(selectPostsIsLoading);

	return isLoading ? <Spinner /> : (
		<div className='posts'>
			{posts.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</div>
	);
};

export default Posts;
