import './App.css';
//import ComponentA from './components/componentA';
//import Clock from './components/clock'
//import Contactlist from './components/container/contactList';
//import MouseEvents from './components/mouseEvents';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}        {/* <ComponentA></ComponentA> */}
      {/* <Clock></Clock> */}
      {/* <ContactList></ContactList> */}
      {/*<MouseEvents></MouseEvents>
      {/* </header> */}
      {/* PROYECTO FINAL */}
      {<TaskListComponent></TaskListComponent>}
    </div>
  );
}

export default App;
