import { useDispatch, useSelector } from 'react-redux';
import Posts from '../posts/posts.component';
import { selectPosts } from '../../store/posts/posts.selector';
import { useEffect } from 'react';
import { fetchPostsStart } from '../../store/posts/posts.action';
import { POST_TYPE } from '../../store/posts/posts.types';

import './user-details.styles.css';
import { User } from '../../store/user/user.types';
import AvatarLarge from '../avatar-large/avatar-large.component';

type UserDetailsProps = { user: User; };
const UserDetails = ({ user: { displayName, avatar, bio, id } }: UserDetailsProps) => {

    const userPosts = useSelector(selectPosts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPostsStart(POST_TYPE.USER_POSTS, id));
        // eslint-disable-next-line
    }, []
    );

    return (
        <>
            <h2 className='display-name'>{displayName}</h2>
            <AvatarLarge src={avatar} />
            <p className='bio'>{bio}</p>
            <Posts posts={userPosts} />
        </>
    );
};

export default UserDetails;