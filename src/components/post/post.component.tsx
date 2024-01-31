import './post.styles.css';

export type PostType = {
	user: string;
	caption: string;
	image: string | null;
	highFives: number;
	comments: number;
	shares: number;
};
const Post = ({
	user,
	caption,
	image,
	highFives,
	comments,
	shares,
}: PostType) => {
	return (
		<div className='post'>
			<h2>{user}</h2>
			<p>{caption}</p>
			{image && <img src={image} alt={caption} />}
			<br />
			<button>{highFives}</button>
			<button>{comments}</button>
			<button>{shares}</button>
		</div>
	);
};

export default Post;
