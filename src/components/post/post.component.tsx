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
import { fetchLikesStart, likePostStart, unlikePostStart } from '../../store/likes/likes.action';
import DisplayNameCard from '../display-name-card/display-name-card.component';
import Likes from '../likes/likes.component';
import { fetchCommentsStart } from '../../store/comments/comments.action';

const Post = ({
	user: { displayName, avatar },
	id,
	text,
	embed,
	likesCount,
	likes,
	commentsCount,
	comments,
	isLiked
}: PostType) => {

	const [showLikes, setShowLikes] = useState(false);
	const [showComments, setShowComments] = useState(false);
	const [showCommentBox, setShowCommentBox] = useState(false);
	const dispatch = useDispatch();

	const toggleLike = async () => {
		if (isLiked)
			dispatch(unlikePostStart(id));
		else
			dispatch(likePostStart(id));
	};

	const handleShowLikes = () => {
		dispatch(fetchLikesStart(id));
		setShowLikes(!showLikes);
	};

	const handleCommentIconClick = () => {
		dispatch(fetchCommentsStart(id));
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
					<ButtonText onClick={handleShowLikes}>{likesCount}</ButtonText>
				</Button>

				<Button>
					<CommentIcon onClick={handleShowCommentBox} />
					<ButtonText onClick={handleCommentIconClick}>{commentsCount}</ButtonText>
				</Button>

			</Buttons>
			{showLikes && likes && <Likes likes={likes} />}
			{showCommentBox && <CommentBox postId={id} />}
			{showComments && comments && <Comments comments={comments} />}
		</PostContainer >
	);
};

export default Post;
