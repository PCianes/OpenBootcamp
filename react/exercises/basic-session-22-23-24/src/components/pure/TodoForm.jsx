import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const Todoform = ({ submit }) => {

    const text = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        submit(text.current.value);
        text.current.value = '';
    }

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' ref={text} />
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

Todoform.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Todoform;
