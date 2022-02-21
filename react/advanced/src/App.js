import './App.css';
import { Counter } from './components/Counter'
import { Tasklist } from './components/TaskList';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

function App(props) {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  return (
    <div className="App">
      <header className="App-header">
        {newServiceWorkerDetected && (
          <div style={{ backgroundColor: 'tomato', marginBottom: 20 }}>
            <h3>New App version</h3>
            <button onClick={onLoadNewServiceWorkerAccept}>¡Update now!</button>
          </div>
        )}
        <Counter />
        <Tasklist />
      </header>
    </div>
  );
}

export default withServiceWorkerUpdater(App);
