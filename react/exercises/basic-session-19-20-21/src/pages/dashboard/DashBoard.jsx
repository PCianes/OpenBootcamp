import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';

import TaskListComponent from '../../components/container/task_list';

const Dashboardpage = () => {

    const navigate = useNavigate();

    const logout = () => {
        navigate('/login');
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Logout</Button>
            <TaskListComponent></TaskListComponent>
        </div>
    );
}

export default Dashboardpage;
