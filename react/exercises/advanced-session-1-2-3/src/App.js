import './App.css';
import { Counter } from './components/Counter'
import { Tasklist } from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Tasklist />
      </header>
    </div>
  );
}

export default App;
