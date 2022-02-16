import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../App'
import { addTask } from '../state/actions'

const Form = () => {
  const { state, dispatch } = useContext(GlobalContext)
  const formRef = useRef('')
  const textRef = useRef('')

  const submit = (event) => {
    event.preventDefault()
    dispatch(addTask(textRef.current.value))
    formRef.current.reset()
  }

  return (
    <form ref={formRef} onSubmit={submit}>
      <input type="text" ref={textRef} placeholder='task text' />
      <button type="submit">
        {
          state.tasks.length > 0 ? 'New task' : 'First task!'
        }
      </button>
    </form>
  )
}

export default Form
