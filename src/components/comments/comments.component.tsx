import { useDispatch, useSelector } from 'react-redux';
import CommentCard from '../comment-card/comment-card.component';
import { CommentsContainer } from './comments.styles';
import { useEffect } from 'react';
import { fetchCommentsStart } from '../../store/comments/comments.action';
import { selectComments, selectCommentsIsLoading } from '../../store/comments/comments.selector';
import Spinner from '../spinner/spinner.component';

type CommentsProps = {
    postId: string;
};
const Comments = ({ postId }: CommentsProps) => {

    const comments = useSelector(selectComments);
    const commentsIsLoading = useSelector(selectCommentsIsLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCommentsStart(postId));
    },[postId]);

    if (commentsIsLoading) {
        return <Spinner />;
    }

    return (
        <CommentsContainer>
            {comments.map((comment) => (
                <CommentCard comment={comment} key={comment.id} />
            ))}
        </CommentsContainer>
    );
};

export default Comments;