import './post.styles.css';
import { Post as PostType } from '../../store/posts/posts.types';


const Post = ({ user: { username, profilePicture }, text, image, highFives, comments}: PostType) => {
	return (
		<div className='post'>
			<div className='post-header'>
				<img src={profilePicture} alt={username} />
			<h2>{username}</h2>
			</div>
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
