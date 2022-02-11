import React, { useState } from 'react';
import ContactComponent from '../contact';
import ContactForm from '../contactForm';

import '../../styles/contact.scss'

const Contactlist = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    const tempContacts = [...contacts]
    tempContacts.push(contact)
    setContacts(tempContacts.reverse())
  }

  const toggleContactState = (contact) => {
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts[index].online = !tempContacts[index].online
    setContacts(tempContacts)
  }

  const deleteContact = (contact) => {
    const index = contacts.indexOf(contact)
    const tempContacts = [...contacts]
    tempContacts.splice(index, 1)
    setContacts(tempContacts)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mx-auto mt-3">
          <ContactForm add={addContact} length={contacts.length}></ContactForm>
        </div>
      </div>
      <div className="row">
        <div className="col-8 mx-auto">
          {contacts.length > 0 ? (
            contacts.map((contact, index) => {
              return (
                <ContactComponent
                  key={index}
                  contact={contact}
                  deleteContact={deleteContact}
                  toggleContactState={toggleContactState}
                >
                </ContactComponent>
              )
            })
          ) : (
            <div>
              <h3>There are no contacts to show...</h3>
              <h4>Please, create one</h4>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default Contactlist;
