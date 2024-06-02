import { useEffect } from "react";

import Spinner from '../../components/spinner/spinner.component';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'oidc-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetailsStart } from '../../store/user/user.action';
import { selectCurrentUserId } from '../../store/user/user.selector';

const Callback = () => {

    const navigate = useNavigate();

    const { isLoading, userData } = useAuth();
    const dispatch = useDispatch();
    const userId = useSelector(selectCurrentUserId);
    useEffect(() => {
        if (!isLoading && userData) {
            if (userData.profile.sub !== userId) {
                dispatch(fetchUserDetailsStart(userData.profile.sub, true));
            }
            navigate('/');
        }
        // eslint-disable-next-line
    }, [isLoading, userData]);

    return (
        <Spinner />
    );

};

export default Callback;