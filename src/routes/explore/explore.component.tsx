import Posts from '../../components/posts/posts.component';
import { Post, User } from '../../store/posts/posts.types';

const Explore = () => {

	const user: User = {
		id: '0',
		username: 'hawksea111222222222211111111',
		profilePicture: 'https://i.ibb.co/4p8FSQ7/SeaHawk.jpg'
	};

	const post: Post = {
		id: '0',
		user,
		text: 'caption',
		image:
			'https://media.discordapp.net/attachments/1192866457688752148/1199702169729908786/49bdbf8c63ec02394a09de762e5d5f72_2.jpg',
		likes: 1,
		comments: 1,
		shares: 1,
	};
	const arr = [];
	for (let f = 0; f < 36; f++) {
		arr.push(f);
	}
	const posts = arr.map((int): Post => {
		const newPost = { ...post };
		newPost.text = post.text + ' ' + int;
		newPost.likes = post.likes + int;
		newPost.comments = post.comments + int;
		newPost.shares = post.shares + int;
		return newPost;
	});
	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Explore;
