import { useState } from 'react';

import { ReactComponent as CommentIcon } from "../../assets/comment.svg";
import { Post as PostType } from '../../store/posts/posts.types';
import LikeIcon from '../like-icon/like-icon.component';

import {
	Button,
	ButtonText,
	Buttons,
	Header,
	Image,
	PostContainer,
	ProfilePicture,
	Text,
	Username
} from './post.styles';

const Post = ({ user: { displayName, avatar }, text, image, likes, comments }: PostType) => {

	const [isLiked, setIsLiked] = useState(false);

	const toggleLike = () => { setIsLiked(!isLiked); };

	return (
		<PostContainer>

			<Header>
				<ProfilePicture src={avatar} alt={displayName} />
				<Username>{displayName}</Username>
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
