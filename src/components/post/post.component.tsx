import './post.styles.css';

export type PostType = {
	id: string;
	userId: string;
	text: string;
	image: string | null;
	highFives: number;
	comments: number;
	shares: number;
};
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
