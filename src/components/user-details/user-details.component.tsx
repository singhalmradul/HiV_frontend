import { useDispatch, useSelector } from 'react-redux';
import Posts from '../posts/posts.component';
import { selectUser, selectUserIsLoading } from '../../store/user/user.selector';
import { selectPosts } from '../../store/posts/posts.selector';
import Spinner from '../spinner/spinner.component';
import { useEffect } from 'react';
import { fetchUserDetailsStart } from '../../store/user/user.action';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { POST_TYPES } from '../../store/posts/posts.types';

import './user-details.styles.css';
import { useNavigate } from 'react-router-dom';

type UserDetailsProps = { userId: string; };
const UserDetails = ({ userId }: UserDetailsProps) => {

    const userIsLoading = useSelector(selectUserIsLoading);
    const user = useSelector(selectUser);
    const userPosts = useSelector(selectPosts);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            dispatch(fetchUserDetailsStart(userId));
        }
        else {
            dispatch(fetchPostsStart(POST_TYPES.USER_POSTS));
        }
    }, [user]
    );

    if (!user) {
        return <Spinner />;
    }

    const { displayName, avatar, bio, username } = user;

    return (
        <>
            <h2 className='display-name'>{displayName}</h2>
            {avatar && <img className='avatar' src={avatar} alt={username} />}
            <p className='bio'>{bio}</p>
            <Posts posts={userPosts} />
        </>
    );
};

export default UserDetails;