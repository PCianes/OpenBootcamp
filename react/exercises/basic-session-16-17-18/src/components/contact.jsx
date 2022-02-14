import React from 'react'
import PropTypes from 'prop-types'

import { Contact } from '../models/contact.class'

const ContactComponent = ({ contact, toggleContactState, deleteContact }) => {

  const { name, surname, email, online, state } = contact

  const contactOnline = {
    color: 'green',
    fontWeight: 'bold',
  }

  const contactOffline = {
    color: 'tomato',
  }

  return (
    <div className="list-group-item flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <p className="mb-3" style={online ? contactOnline : contactOffline}>
          {online ? state.ONLINE : state.OFFLINE}</p>
        <div>
          <i onClick={() => toggleContactState(contact)} className='bi-toggle-on contact-action' style={online ? contactOnline : contactOffline}></i>
          <i onClick={() => deleteContact(contact)} className='bi-trash contact-delete contact-action'></i>
        </div>
      </div>
      <p>Name: <span className="contact-data">{name}</span></p>
      <p>Surname: <span className="contact-data">{surname}</span></p>
      <p>Email: <span className="contact-data">{email}</span></p>
    </div>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  toggleContactState: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactComponent
