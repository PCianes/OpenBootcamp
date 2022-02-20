import React, { useState } from 'react'
import { useList } from '../hooks/useList'

export function Tasklist() {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    tasks.push(newTask);
    setNewTask('');
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div>
      <h2>¡Hello List!</h2>
      <form onSubmit={handleSubmit}>
        <input value={newTask} onChange={handleInputChange} placeholder="New Task" type="text" />
        <button type="submit">Create Task</button>
      </form>
      <button onClick={tasks.clear}>Clear items</button>
      <button onClick={tasks.sort}>Sort items</button>
      <button onClick={tasks.reverse}>Reverse items</button>
      {tasks.isEmpty()
        ? (<p>Task List is Empty</p>)
        : (
          <ul>
            {tasks.value.map((task, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  onClick={() => tasks.remove(index)}
                  checked={false}
                  readOnly
                />
                {task}
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}