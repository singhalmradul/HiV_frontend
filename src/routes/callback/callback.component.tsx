import React, { useEffect } from "react";
import Spinner from '../../components/spinner/spinner.component';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
// import { fetchUserSuccess } from '../../store/user/user.action';
import { User } from '../../store/user/user.types';
import { useNavigate } from 'react-router-dom';

const Callback = () => {

    // const { user } = useAuth0();
    // const x:User = {
    //     id: user?.sub as string,
    //     username: user?.name as string,
    //     profilePicture: user?.picture as string,
    // }
    // const navigate = useNavigate();
    // console.log(user);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(user);
    //     if (user) {
    //         navigate('/');
    //         // dispatch(fetchUserSuccess(x));
    //     }
    // },[user])

    return (
        <Spinner />
    );
};

export default Callback;