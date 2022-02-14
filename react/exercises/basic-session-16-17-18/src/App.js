import './App.css';
//import ComponentA from './components/componentA';
//import Clock from './components/clock'
//import Contactlist from './components/container/contactList';
//import MouseEvents from './components/mouseEvents';
//import TaskListComponent from './components/container/task_list';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Loginpage from './pages/auth/LoginPage';
import Registerpage from './pages/auth/RegisterPage';
import Dashboardpage from './pages/dashboard/DashBoard';
import Notfoundpage from './pages/404/NotFoundPage';

function App() {

  // TODO: Change to value from sessionStorage (or something dinamic)
  let loggedIn = true;

  return (
    <div className="App">
      {/* <header className="App-header"> */}        {/* <ComponentA></ComponentA> */}
      {/* <Clock></Clock> */}
      {/* <ContactList></ContactList> */}
      {/*<MouseEvents></MouseEvents>
      {/* </header> */}
      {/* PROYECTO FINAL */}
      {/*<TaskListComponent></TaskListComponent>*/}
      <Router>
        {/* Route Switch */}
        <Routes>
          {/* Redirections to protect our routes */}
          <Route exact path='/' element={
            loggedIn ?
              (<Navigate from='/' to='/dashboard' />)
              :
              (<Navigate from='/' to='/login' />)
          }>
          </Route>
          {/* Register Route */}
          <Route exact path='/register' element={<Registerpage />} />
          {/* Login Route */}
          <Route exact path='/login' element={<Loginpage />} />
          {/* DashBoard Route */}
          <Route exact path='/dashboard' element={
            loggedIn ?
              (<Dashboardpage />)
              :
              (<Navigate from='/' to='/login' />)
          }>
          </Route>
          <Route path='*' element={<Notfoundpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
