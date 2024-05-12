import { Comment } from '../../store/comments/comments.types';
import DisplayNameCard from '../display-name-card/display-name-card.component';
import { Separator } from './comment-card.styles';

type CommentCardProps = {
    comment: Comment;
};
const CommentCard = ({ comment: { user, text } }: CommentCardProps) => {
    return (
        <div>
            <Separator />
            <DisplayNameCard user={user} />
            <p>{text}</p>
        </div>
    );
};

export default CommentCard;