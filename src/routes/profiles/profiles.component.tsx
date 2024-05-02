import { Route, Routes } from 'react-router-dom';
import Profile from '../profile/profile.component';
import UserProfile from '../user-profile/user-profile.component';

const Profiles = () => {
    return (
        <Routes>
            <Route
                index
                element={<Profile />}
            />
            <Route
                path=':userId'
                element={<UserProfile />}
            />
        </Routes>
    );
};
export default Profiles;