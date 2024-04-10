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
import { useDispatch } from 'react-redux';
import { toggleLikeStart } from '../../store/posts/posts.action';

const Post = ({
	user: { displayName, avatar },
	id,
	text,
	image,
	likes,
	comments,
	isLiked
}: PostType) => {

	const dispatch = useDispatch();

	const toggleLike = async () => {
		dispatch(toggleLikeStart(id));
	};

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
