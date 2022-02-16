import { NEW, TOGGLE, DELETE, FILTER } from './actions'
import { FILTERS } from '../models/filters.enum'
import { Task } from '../models/task.class'

export const initialState = {
  filter: FILTERS.ALL,
  tasks: []
}

export const globalReducer = (state, action) => {
  switch (action.type) {
    case NEW:
      const newTask = new Task(action.payload.id, action.payload.text)
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      }
    case TOGGLE:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (action.payload.id === task.id) {
            return new Task(task.id, task.description, !task.completed)
          }
          return task
        })
      }
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter(task => action.payload.id !== task.id)
      }
    case FILTER:
      return {
        ...state,
        filter: action.payload.filter
      }
    default:
      return state
  }
}