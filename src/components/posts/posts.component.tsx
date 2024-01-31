import Post, { PostType } from '../post/post.component';
import './posts.styles.css';

type PostProps = { posts: PostType[] };
const Posts = ({ posts }: PostProps) => {
	return (
		<div className='posts'>
			{posts.map((post) => (
				<Post {...post} />
			))}
		</div>
	);
};

export default Posts;
