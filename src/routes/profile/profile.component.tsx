import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser, selectUserIsLoading } from '../../store/user/user.selector';
import { selectPosts } from '../../store/posts/posts.selector';
import { POST_TYPES } from '../../store/posts/posts.types';
import { fetchPostsStart } from '../../store/posts/posts.action';
import Spinner from '../../components/spinner/spinner.component';
import Posts from '../../components/posts/posts.component';

import './profile.styles.css';
import Modal from '../../components/modal/modal.component';
import { setDisplayModal } from '../../store/modal/modal.action';
import Button from '../../components/button/button.component';

const Profile = () => {

    const userIsLoading = useSelector(selectUserIsLoading);
    const user = useSelector(selectUser);
    const userPosts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsStart(POST_TYPES.USER_POSTS));
    }, [user]);

    const openModal = () => {
        dispatch(setDisplayModal(true));
    };

    if (userIsLoading || !user) {
        return <Spinner />;
    }

    const { displayName, avatar, bio, username } = user;

    return (
        <div className='profile-container'>
            <Button onClick={openModal}>create post</Button>
            <h2 className='display-name'>{displayName}</h2>
            {avatar && <img className='avatar' src={avatar} alt={username} />}
            <p className='bio'>{bio}</p>
            <Posts posts={userPosts} />
            <Modal />
        </div>
    );

};

export default Profile;