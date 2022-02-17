import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux'

import App from './components/App';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
