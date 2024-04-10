import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectUserIsLoading } from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';

import './profile.styles.css';
import Posts from '../../components/posts/posts.component';
import { useEffect } from 'react';
import { selectPosts } from '../../store/posts/posts.selector';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { POST_TYPES } from '../../store/posts/posts.types';

const Profile = () => {

    const userIsLoading = useSelector(selectUserIsLoading);
    const user = useSelector(selectUser);
    const userPosts = useSelector(selectPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPostsStart(POST_TYPES.USER_POSTS));
    }, [user]);


    if (userIsLoading) {
        return <Spinner />;
    }

    if (!user) {
        return <h2>unexpected error</h2>;
    }

    const { displayName, avatar, bio, username } = user;

    return (
        <div className='profile-container'>
            <h2 className='display-name'>{displayName}</h2>
            {avatar && <img className='avatar' src={avatar} alt={username} />}
            <p className='bio'>{bio}</p>
            <Posts posts={userPosts} />
        </div>
    );

};

export default Profile;