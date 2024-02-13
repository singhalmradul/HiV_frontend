import { PostType } from '../../components/post/post.component';
import Posts from '../../components/posts/posts.component';

const Explore = () => {
	const post = {
		user: 'user',
		text: 'caption',
		image:
			'https://media.discordapp.net/attachments/1192866457688752148/1199702169729908786/49bdbf8c63ec02394a09de762e5d5f72_2.jpg?ex=65c380b6&is=65b10bb6&hm=a4d9442d052444bed9d2ae9507dd9ce2208cfa04bc7d422569554c611671136d&=&format=webp',
		highFives: 5,
		comments: 6,
		shares: 9,
	};
	const arr = [];
	for (let f = 0; f < 15; f++) {
		arr.push(f);
	}
	const posts = arr.map((int): PostType => {
		const newPost = { ...post };
		newPost.user = post.user + ' ' + int;
		newPost.text = post.text + ' ' + int;
		newPost.highFives = post.highFives + int;
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