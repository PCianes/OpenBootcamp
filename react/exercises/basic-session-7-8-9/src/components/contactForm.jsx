import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactForm = ({ add, length }) => {
    const formRef = useRef('')
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
        );
        add(newContact);
        formRef.current.reset()
        nameRef.current.focus()
    }

    return (
        <form ref={formRef} onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Name' />
                <input ref={surnameRef} id='inputSurname' type='text' className='form-control form-control-lg' required placeholder='Surname' />
                <input ref={emailRef} id='inputEmail' type='email' className='form-control form-control-lg' required placeholder='email@gmai.com' />
                <button type='submit' className='btn btn-success btn-lg mt-1'>
                    {length > 0 ? 'Add New Contact' : 'Create your First Contact!'}
                </button>
            </div>
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default ContactForm;
