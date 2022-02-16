import React, { useContext } from 'react'
import { setFilter } from '../state/actions'
import { GlobalContext } from '../App'
import { FILTERS } from '../models/filters.enum'

const Filter = () => {
  const { state, dispatch } = useContext(GlobalContext)

  const all = () => {
    dispatch(setFilter(FILTERS.ALL))
  }

  const pending = () => {
    dispatch(setFilter(FILTERS.PENDING))
  }

  const completed = () => {
    dispatch(setFilter(FILTERS.COMPLETED))
  }

  const basicSytle = {
    cursor: 'pointer'
  }

  const activeStyle = {
    ...basicSytle,
    color: 'blue',
    fontWeight: 700
  }

  return (
    <div>
      <button
        style={state.filter === FILTERS.ALL ? activeStyle : basicSytle}
        onClick={all}
      >ALL</button>
      <button
        style={state.filter === FILTERS.PENDING ? activeStyle : basicSytle}
        onClick={pending}
      >PENDING</button>
      <button
        style={state.filter === FILTERS.COMPLETED ? activeStyle : basicSytle}
        onClick={completed}
      >COMPLETED</button>
    </div>
  )
}

export default Filter
