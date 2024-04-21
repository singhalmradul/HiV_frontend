import { useDispatch } from 'react-redux';
import { useAuth } from 'oidc-react';

import Modal from '../../components/modal/modal.component';
import { setDisplayModal } from '../../store/modal/modal.action';
import Button from '../../components/button/button.component';
import UserDetails from '../../components/user-details/user-details.component';

import './profile.styles.css';

const Profile = () => {

    const dispatch = useDispatch();

    const { signOutRedirect } = useAuth();

    const openModal = () => {
        dispatch(setDisplayModal(true));
    };

    const handleLogOut = () => {
        signOutRedirect();
    };



    return (
        <div className='profile-container'>
            <div className='buttons'>
                <Button onClick={openModal}>create post</Button>
                <Button onClick={handleLogOut}>log out</Button>
            </div>
            <UserDetails />
            <Modal />
        </div>
    );

};

export default Profile;