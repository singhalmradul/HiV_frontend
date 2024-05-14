import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/buttons/button.styles';
import UserDetails from '../../components/user-details/user-details.component';
import { selectCurrentUserId, selectIsUserFollowed, selectUser, selectUserError, selectUserIsLoading } from '../../store/user/user.selector';

import './user-profile.styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchUserDetailsStart, followUserStart, resetUserState, unfollowUserStart } from '../../store/user/user.action';
import Buttons from '../../components/buttons/buttons.styles';
import Spinner from '../../components/spinner/spinner.component';

type ProfilesRouteParams = { userId: string; };
const UserProfile = () => {

    const { userId } = useParams<
        keyof ProfilesRouteParams
    >() as ProfilesRouteParams;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isFollowed = useSelector(selectIsUserFollowed);
    const cuurentUserId = useSelector(selectCurrentUserId);
    const user = useSelector(selectUser);
    const userIsLoading = useSelector(selectUserIsLoading);
    const userError = useSelector(selectUserError);

    useEffect(
        () => {
            if (userError) {
                dispatch(resetUserState());
                navigate('/');
            } else if (!userIsLoading && user?.id !== userId) {
                dispatch(fetchUserDetailsStart(userId));
            }
            if (cuurentUserId === userId) {
                navigate('/profile');
            }
        }
        // eslint-disable-next-line
        , [userId, userIsLoading, user]
    );

    const follow = () => {
        dispatch(followUserStart());
    };
    const unfollow = () => {
        dispatch(unfollowUserStart());
    };

    if (userIsLoading || !user) {
        return <Spinner />;
    };

    return (
        <div className='profile-container'>
            <Buttons>
                {
                    isFollowed
                        ? <Button onClick={unfollow}>unfollow</Button>
                        : <Button onClick={follow}>follow</Button>
                }
            </Buttons>
            <UserDetails user={user} />
        </div>
    );

};

export default UserProfile;