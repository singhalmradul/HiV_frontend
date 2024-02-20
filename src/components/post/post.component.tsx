import './post.styles.css';
import { Post as PostType } from '../../store/posts/posts.types';
import { ReactComponent as HighFive } from "../../assets/high-five.svg";
import { ReactComponent as Comment } from "../../assets/comment.svg";

const Post = ({ user: { username, profilePicture }, text, image, highFives, comments}: PostType) => {
	return (
		<div className='post'>
			<div className='post-header'>
				<img src={profilePicture} alt={username} />
			<p>{username}</p>
			</div>
			<p>{text}</p>
			{image && <img src={image} alt={text} />}
			<div className='buttons'>
				<div>
					<HighFive/>
					<span>{highFives}</span>
				</div>
				<div>
					<Comment />
					<span>{comments}</span>
				</div>
			</div>
		</div>
	);
};

export default Post;
