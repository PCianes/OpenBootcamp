import React, { useState } from 'react'

import { Contact } from '../models/contact.class'
import ComponentB from './componentB'

const defaultContact = new Contact('Pablo', 'Cianes', 'myemail@gmail.com')

const ComponentA = () => {
  const [contact, updateContact] = useState(defaultContact);
  const { name, surname, email, online } = contact

  const toggleState = () => {
    updateContact({
      ...contact,
      online: !online
    })
  }

  return (
    <div>
      <h1>Component A</h1>
      <p>Name: {name}</p>
      <p>surname: {surname}</p>
      <p>email: {email}</p>
      <ComponentB contact={contact} toggleState={toggleState}></ComponentB>
    </div>
  )
}

export default ComponentA
