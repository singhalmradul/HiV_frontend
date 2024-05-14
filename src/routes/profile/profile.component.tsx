import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'oidc-react';

import Modal from '../../components/modal/modal.component';
import { setDisplayModal } from '../../store/modal/modal.action';
import Button from '../../components/buttons/button.styles';
import UserDetails from '../../components/user-details/user-details.component';

import './profile.styles.css';
import { selectCurrentUserId, selectUser, selectUserIsLoading } from '../../store/user/user.selector';
import { persistor } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import Buttons from '../../components/buttons/buttons.styles';
import { useEffect } from 'react';
import { fetchUserDetailsStart } from '../../store/user/user.action';
import Spinner from '../../components/spinner/spinner.component';

const Profile = () => {

    const dispatch = useDispatch();

    const { signOutRedirect } = useAuth();

    const openModal = () => {
        dispatch(setDisplayModal(true));
    };

    const handleLogOut = () => {
        persistor.purge();
        signOutRedirect();
    };

    const navigate = useNavigate();

    const gotoEditProfile = () => {
        navigate('/edit-profile');
    }

    const userId = useSelector(selectCurrentUserId) as string;
    const user = useSelector(selectUser);
    const userIsLoading = useSelector(selectUserIsLoading);

    useEffect(
        () => {
            if (!userIsLoading && user?.id !== userId) {
                dispatch(fetchUserDetailsStart(userId));
            }
        }
        // eslint-disable-next-line
        , [userIsLoading, user]
    );

    if (!user) {
        if (userIsLoading) {
            return <Spinner />;
        }
        return <h1>oops!! we ran into an error, try refreshing the page</h1>;
    }

    return (
        <div className='profile-container'>
            <Buttons>
                <Button onClick={openModal}>create post</Button>
                <Button onClick={gotoEditProfile}>edit profile</Button>
                <Button onClick={handleLogOut}>log out</Button>
            </Buttons>
            <UserDetails user={user} />
            <Modal />
        </div>
    );

};

export default Profile;