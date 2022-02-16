import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../App'
import { FILTERS } from '../models/filters.enum'
import { toggleTask, deleteTask } from '../state/actions'

const filterTasks = (tasks, filter) => {
  switch (filter) {
    case FILTERS.ALL:
      return [...tasks]

    case FILTERS.COMPLETED:
      return tasks.filter(task => task.completed)

    case FILTERS.PENDING:
      return tasks.filter(task => !task.completed)

    default:
      return [...tasks]
  }
}

const Tasks = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const [tasks, setTasks] = useState(filterTasks(state.tasks, state.filter))

  useEffect(() => {
    setTasks(filterTasks(state.tasks, state.filter))
  }, [state]);

  const toggle = (id) => {
    dispatch(toggleTask(id))
  }

  const remove = (id) => {
    dispatch(deleteTask(id))
  }

  const taskStyle = (completed) => {
    const baseStyle = {
      listStyle: 'none',
      cursor: 'pointer',
    }
    if (completed) {
      return {
        ...baseStyle,
        color: 'gray',
        textDecoration: 'line-through'
      }
    }
    return {
      ...baseStyle,
      color: 'tomato',
      fontWeight: 700
    }
  }

  return (
    <div>
      <ul>
        {
          tasks.map(task => {
            return (
              <li key={task.id} onClick={() => toggle(task.id)} style={taskStyle(task.completed)}>
                {task.description}
                <button onClick={() => remove(task.id)} style={{ marginLeft: '10px' }}>X</button>
              </li>)
          })
        }
      </ul>
    </div>
  )
}

export default Tasks
