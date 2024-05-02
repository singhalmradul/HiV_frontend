import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button/button.component';
import UserDetails from '../../components/user-details/user-details.component';
import { selectCurrentUserId, selectIsUserFollowed } from '../../store/user/user.selector';

import './user-profile.styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

type ProfilesRouteParams = { userId: string; };
const UserProfile = () => {

    const { userId } = useParams<
        keyof ProfilesRouteParams
    >() as ProfilesRouteParams;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isFollowed = useSelector(selectIsUserFollowed);
    const cuurentUserId = useSelector(selectCurrentUserId);

    useEffect(
        () => {
            if (cuurentUserId === userId) {
                navigate('/profile');
            }
        }
        // eslint-disable-next-line
        , [userId]
    );

    const follow = () => {

    };
    const unfollow = () => {
    };

    return (
        <div className='profile-container'>
            <div className='buttons'>
                {
                    isFollowed
                        ? <Button onClick={follow}>follow</Button>
                        : <Button onClick={unfollow}>unfollow</Button>
                }
            </div>
            <UserDetails userId={userId} />
        </div>
    );

};

export default UserProfile;