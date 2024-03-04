import Posts from '../../components/posts/posts.component';
import { Post, User } from '../../store/posts/posts.types';

const Explore = () => {

	const user: User = {
		id: '0',
		username: '12345678901234567890',
		profilePicture: 'https://i.ibb.co/4p8FSQ7/SeaHawk.jpg'
	};

	const post: Post = {
		id: '0',
		user,
		text: 'caption',
		image:
			'https://cdn.discordapp.com/attachments/1192866457688752148/1199702169729908786/49bdbf8c63ec02394a09de762e5d5f72_2.jpg?ex=65e86ab6&is=65d5f5b6&hm=1750940274630c5698fe3e44df7fd6cc379a1afb1f5dd7c6da075cbea2a9d7a1&',
		likes: 1,
		comments: 1,
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
		return newPost;
	});
	return (
		<div className='home'>
			<Posts posts={posts} />
		</div>
	);
};

export default Explore;
