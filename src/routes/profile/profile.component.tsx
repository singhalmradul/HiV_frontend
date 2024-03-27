import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser, selectUserIsLoading } from '../../store/user/user.selector';

const Profile = () => {

    const userIsLoading = useSelector(selectUserIsLoading);
    const user = useSelector(selectUser);
    console.log(userIsLoading, user);
    return (
        <div>
        <h1>Profile</h1>
        <p>This is the user profile page</p>
        </div>
    );
}

export default Profile;