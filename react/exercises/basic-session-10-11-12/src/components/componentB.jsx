import React from 'react'
import PropTypes from 'prop-types'

import { Contact } from '../models/contact.class'

const ComponentB = ({ contact, toggleState }) => {

  const { online, state } = contact

  return (
    <div>
      <h2>Component B</h2>
      <p>{online ? state.ONLINE : state.OFFLINE}</p>
      <button onClick={toggleState}>Toggle state</button>
    </div>
  )
}

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  toggleState: PropTypes.func.isRequired
}

export default ComponentB
