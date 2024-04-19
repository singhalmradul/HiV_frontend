import { Comment } from '../../store/comments/comments.types';
import DisplayNameCard from '../display-name-card/display-name-card.component';
import { Separator } from './comment-card.styles';

type CommentCardProps = {
    comment: Comment;
};
const CommentCard = ({ comment: { user: { displayName, avatar }, text } }: CommentCardProps) => {
    return (
        <div>
            <Separator />
            <DisplayNameCard displayName={displayName} avatar={avatar} />
            <p>{text}</p>
        </div>
    );
};

export default CommentCard;