import './post.styles.css';
import { Post as PostType } from '../../store/posts/posts.types';


const Post = ({ userId, text, image, highFives, comments, shares }: PostType) => {
	return (
		<div className='post'>
			<h2>{userId}</h2>
			<p>{text}</p>
			{image && <img src={image} alt={text} />}
			<div className='buttons'>
				<button>{highFives}</button>
				<button>{comments}</button>
			</div>
		</div>
	);
};

export default Post;
