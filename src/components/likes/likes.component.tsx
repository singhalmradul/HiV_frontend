import DisplayNameCard from '../display-name-card/display-name-card.component';
import { LikesContainer } from './likes.styles';
import { Like } from '../../store/likes/likes.types';

type LikesProps = {
    likes: Like[];
};


const Likes = ({ likes }: LikesProps) => {
    return (
        <LikesContainer>
            {likes.map(({ user }) => (
                <DisplayNameCard user={user} key={user.id} />
            ))}
        </LikesContainer>
    );
};

export default Likes;