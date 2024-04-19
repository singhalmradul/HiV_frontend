import React, { useEffect } from "react";
import Spinner from '../../components/spinner/spinner.component';
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