import Posts from '../../components/posts/posts.component';
import { Post, User } from '../../store/posts/posts.types';

const Explore = () => {

	const user: User = {
		id: '0',
		displayName: '12345678901234567890',
		avatar: 'https://i.ibb.co/4p8FSQ7/SeaHawk.jpg'
	};

	const post: Post = {
		id: '0',
		user,
		text: 'caption',
		embed: 'https://i.ibb.co/v38Zyks/robot-high-five.jpg',
		likes: 1,
		comments: 1,
		isLiked: false,
	};
	const arr = [];
	for (let f = 0; f < 2; f++) {
		arr.push(f);
	}
	const posts = arr.map((int): Post => {
		const newPost = { ...post };
		newPost.text = post.text + ' ' + int;
		newPost.likes = post.likes + int;
		newPost.comments = post.comments + int;
		newPost.id = post.id + int;
		newPost.isLiked = int % 2 === 0;
		return newPost;
	});
	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Explore;
