import { useDispatch, useSelector } from 'react-redux';
import Posts from '../posts/posts.component';
import { selectUser, selectUserIsLoading } from '../../store/user/user.selector';
import { selectPosts } from '../../store/posts/posts.selector';
import Spinner from '../spinner/spinner.component';
import { useEffect } from 'react';
import { useAuth } from 'oidc-react';
import { fetchUserDetailsStart } from '../../store/user/user.action';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { POST_TYPES } from '../../store/posts/posts.types';

const UserDetails = () => {

    const userIsLoading = useSelector(selectUserIsLoading);
    const user = useSelector(selectUser);
    const userPosts = useSelector(selectPosts);

    const dispatch = useDispatch();
    const { userData } = useAuth();

    useEffect(() => {
        if (!user && userData) {
            dispatch(fetchUserDetailsStart(userData.profile.sub));
        }
        else {
            dispatch(fetchPostsStart(POST_TYPES.USER_POSTS));
        }
    },[user]
    );
    if (userIsLoading || !user) {
        return <Spinner />;
    }

    const { displayName, avatar, bio, username } = user;

    return (<>
        <h2 className='display-name'>{displayName}</h2>
        {avatar && <img className='avatar' src={avatar} alt={username} />}
        <p className='bio'>{bio}</p>
        <Posts posts={userPosts} />
    </>
    );
};

export default UserDetails;