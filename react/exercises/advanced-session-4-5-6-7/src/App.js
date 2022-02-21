import './App.css';
import { Counter } from './components/Counter'
import { Tasklist } from './components/TaskList';
import Updater from './components/pwa/Updater'
import { NotificationForm } from './components/pwa/NotificacionForm';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Updater />
        <NotificationForm />
        <Counter />
        <Tasklist />
      </header>
    </div>
  );
}

export default App
