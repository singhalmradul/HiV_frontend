import { Post as PostType } from '../../store/posts/posts.types';
import { ReactComponent as CommentIcon } from "../../assets/comment.svg";
import { Button, ButtonText, Buttons, Header, Image, PostContainer, ProfilePicture, Text } from './post.styles';
import { useState } from 'react';
import LikeIcon from '../like-icon/like-icon.component';

const Post = ({ user: { username, profilePicture }, text, image, likes, comments }: PostType) => {
	const [isLiked, setIsLiked] = useState(false);
	const toggleLike = () => { setIsLiked(!isLiked); };
	return (
		<PostContainer>
			<Header>
				<ProfilePicture src={profilePicture} alt={username} />
				<p>{username}</p>
			</Header>
			<Text>{text}</Text>
			{image && <Image src={image} alt={text} />}
			<Buttons>
				<Button>
					<LikeIcon isLiked={isLiked} onClick={toggleLike} />
					<ButtonText>{likes}</ButtonText>
				</Button>
				<Button>
					<CommentIcon />
					<ButtonText>{comments}</ButtonText>
				</Button>
			</Buttons>
		</PostContainer>
	);
};

export default Post;
