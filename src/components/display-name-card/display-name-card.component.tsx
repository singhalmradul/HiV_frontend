import { useDispatch } from 'react-redux';
import { User } from '../../store/posts/posts.types';
import { Avatar, DisplayNameCardContainer } from './display-name-card.styles';
import { fetchUserDetailsStart } from '../../store/user/user.action';

type DisplayNameCardProps = {
    user: User;
};
const DisplayNameCard = ({ user: { id, displayName, avatar } }: DisplayNameCardProps) => {

    const dispatch = useDispatch();

    const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.stopPropagation();
        dispatch(fetchUserDetailsStart(id));
    }
    return (
        <DisplayNameCardContainer to={`/profile/${id}`} onClick={handleOnClick}>
            <Avatar src={avatar} alt={displayName} />
            <p>{displayName}</p>
        </DisplayNameCardContainer>
    );
};

export default DisplayNameCard;