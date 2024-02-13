import './post.styles.css';

export type PostType = {
	user: string;
	text: string;
	image: string | null;
	highFives: number;
	comments: number;
	shares: number;
};
const Post = ({ user, text, image, highFives, comments, shares }: PostType) => {
	return (
		<div className='post'>
			<h2>{user}</h2>
			<p>{text}</p>
			{image && <img src={image} alt={text} />}
			<div className='buttons'>
				<button>{highFives}</button>
				<button>{comments}</button>
				<button>{shares}</button>
			</div>
		</div>
	);
};

export default Post;
