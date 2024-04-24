import { Comment } from '../../store/comments/comments.types';
import CommentCard from '../comment-card/comment-card.component';
import { CommentsContainer } from './comments.styles';

type CommentsProps = {
    comments: Comment[];
};
const Comments = ({ comments }: CommentsProps) => {

    return (
        <CommentsContainer>
            {comments.map((comment) => (
                <CommentCard comment={comment} key={comment.id} />
            ))}
        </CommentsContainer>
    );
};

export default Comments;