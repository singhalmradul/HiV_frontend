import { useDispatch, useSelector } from 'react-redux';
import { fetchLikesStart } from '../../store/likes/likes.action';
import { selectLikes, selectLikesIsLoading } from '../../store/likes/likes.selector';
import { useEffect } from 'react';
import Spinner from '../spinner/spinner.component';
import DisplayNameCard from '../display-name-card/display-name-card.component';
import { LikesContainer } from './likes.styles';

type LikesProps = {
    postId: string;
};


const Likes = ({ postId }: LikesProps) => {
    const likes = useSelector(selectLikes);
    const likesIsLoading = useSelector(selectLikesIsLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLikesStart(postId));
    }, [postId]);

    if (likesIsLoading) {
        return <Spinner />;
    }
    return (
        <LikesContainer>
            {likes.map(({ user: { displayName, avatar, id } }) => (
                <DisplayNameCard displayName={displayName} avatar={avatar} key={id} />
            ))}
        </LikesContainer>
    );
};

export default Likes;