import React from 'react';
import { useNavigate } from 'react-router-dom';
import Loginformik from '../../components/pure/forms/loginFormik';
import Button from '@mui/material/Button';

const Loginpage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login Page</h1>
            <Button variant="contained" onClick={() => navigate('/register')}>Register</Button>
            <Loginformik></Loginformik>
        </div>
    );
}

export default Loginpage;
