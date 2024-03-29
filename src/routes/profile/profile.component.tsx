import { useSelector } from 'react-redux';
import { selectUser, selectUserIsLoading } from '../../store/user/user.selector';
import Spinner from '../../components/spinner/spinner.component';

import './profile.styles.css';

const Profile = () => {

    const userIsLoading = useSelector(selectUserIsLoading);
    const user = useSelector(selectUser)
    if (userIsLoading) {
        return <Spinner />;
    }

    return (
        <div className='profile-container'>
            <h2 className='display-name'>{user?.displayName}</h2>
            {user?.avatar && <img className='avatar'src={user?.avatar} alt={user?.username} />}
            <p className='bio'>{user?.bio}</p>
        </div>
    );

}

export default Profile;