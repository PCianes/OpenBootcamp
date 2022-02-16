export const NEW = 'NEW_TASK'
export const TOGGLE = 'TOGGLE_STATUS_TASK'
export const DELETE = 'DELETE_TASK'
export const FILTER = 'FILTER_TASKS'

let nextTaskID = 0

export const addTask = (text) => {
  return {
    type: NEW,
    payload: {
      id: nextTaskID++,
      text
    }
  }
}

export const toggleTask = (id) => {
  return {
    type: TOGGLE,
    payload: {
      id
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE,
    payload: {
      id
    }
  }
}

export const setFilter = (filter) => {
  return {
    type: FILTER,
    payload: {
      filter
    }
  }
}