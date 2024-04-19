import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as CommentIcon } from "../../assets/comment.svg";
import { Post as PostType } from '../../store/posts/posts.types';
import LikeIcon from '../like-icon/like-icon.component';
import Comments from '../comments/comments.component';
import CommentBox from '../comment-box/comment-box.component';

import {
	Button,
	ButtonText,
	Buttons,
	Embed,
	PostContainer,
	Text,
} from './post.styles';
import { toggleLikeStart } from '../../store/likes/likes.action';
import DisplayNameCard from '../display-name-card/display-name-card.component';
import Likes from '../likes/likes.component';

const Post = ({
	user: { displayName, avatar },
	id,
	text,
	embed,
	likes,
	comments,
	isLiked
}: PostType) => {

	const [showLikes, setShowLikes] = useState(false);
	const [showComments, setShowComments] = useState(false);
	const [showCommentBox, setShowCommentBox] = useState(false);
	const dispatch = useDispatch();

	const toggleLike = async () => {
		dispatch(toggleLikeStart(id));
	};

	const handleShowLikes = () => {
		setShowLikes(!showLikes);
	}

	const handleCommentIconClick = () => {
		setShowComments(!showComments);
	};

	const handleShowCommentBox = () => {
		setShowCommentBox(!showCommentBox);
	};


	return (
		<PostContainer>

			<DisplayNameCard displayName={displayName} avatar={avatar} />

			<Text>{text}</Text>
			{embed && <Embed src={embed} />}

			<Buttons>

				<Button>
					<LikeIcon isLiked={isLiked} onClick={toggleLike} />
					<ButtonText onClick={handleShowLikes}>{likes}</ButtonText>
				</Button>

				<Button>
					<CommentIcon onClick={handleShowCommentBox} />
					<ButtonText onClick={handleCommentIconClick}>{comments}</ButtonText>
				</Button>

			</Buttons>
			{showLikes && <Likes postId={id} />}
			{showCommentBox && <CommentBox postId={id} />}
			{showComments && <Comments postId={id} />}
		</PostContainer >
	);
};

export default Post;
