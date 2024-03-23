import React, { useEffect } from "react";
import Spinner from '../../components/spinner/spinner.component';
import { useDispatch } from 'react-redux';
// import { fetchUserSuccess } from '../../store/user/user.action';
import { User } from '../../store/user/user.types';
import { useNavigate } from 'react-router-dom';

const Callback = () => {

    const navigate = useNavigate();
    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <Spinner />
    );
};

export default Callback;