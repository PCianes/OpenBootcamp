import React from 'react';
import { useNavigate } from 'react-router-dom';
import Registerformik from '../../components/pure/forms/registerFormik';
import Button from '@mui/material/Button';

const Registerpage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Register Page</h1>
            <Button variant="contained" onClick={() => navigate('/login')}>Login</Button>
            <Registerformik></Registerformik>
        </div>
    );
}

export default Registerpage;
