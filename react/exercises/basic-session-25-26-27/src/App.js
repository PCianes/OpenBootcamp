import React, { createContext, useReducer } from 'react';
import './App.css';

import Filter from './components/filter'
import Tasks from './components/tasks'
import Form from './components/form'

import { globalReducer, initialState } from './state/reducer'

export const GlobalContext = createContext()

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Form />
        <Filter />
        <Tasks />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;