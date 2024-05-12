import { useEffect } from "react";

import Spinner from '../../components/spinner/spinner.component';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'oidc-react';
import { useDispatch } from 'react-redux';
import { fetchUserDetailsStart } from '../../store/user/user.action';

const Callback = () => {

    const navigate = useNavigate();

    const { isLoading, userData } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading && userData) {
            dispatch(fetchUserDetailsStart( userData.profile.sub, true));
            navigate('/');
        }
        // eslint-disable-next-line
    }, [isLoading, userData]);

    return (
        <Spinner />
    );

};

export default Callback;