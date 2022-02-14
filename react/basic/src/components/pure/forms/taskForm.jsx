import React from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    title: '',
    description: '',
    level: LEVELS.NORMAL
}

const validationSchema = Yup.object().shape(
    {
        title: Yup.string()
            .max(12, 'Title too long')
            .required('Title is required'),
        description: Yup.string()
            .required('Description is required'),
        level: Yup.string()
            .oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT], 'You must select a Level')
            .required('Level is required')
    }
);

const Taskform = ({ add, length }) => {

    function addTask(values, reset) {
        const newTask = new Task(
            values.title,
            values.description,
            false,
            values.level
        );
        add(newTask)
        reset()
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => { addTask(values, resetForm) }}
        >
            {
                ({ touched, errors }) => (
                    <Form className='d-flex justify-content-center align-items-center mb-4'>
                        <div className='form-outline flex-fill'>
                            <label htmlFor="title">Title</label>
                            <Field id="title" type="text" name="title" placeholder="Task title" className='form-control form-control-lg' />
                            {
                                errors.title && touched.title &&
                                (
                                    <ErrorMessage name="title" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Description</label>
                            <Field id="description" type="text" name="description" placeholder="Task description" className='form-control form-control-lg'
                            />
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor="level">Level</label>
                            <Field id="level" name="level" component="select" className='form-control form-control-lg'>
                                <option value={LEVELS.NORMAL}>
                                    Normal
                                </option>
                                <option value={LEVELS.URGENT}>
                                    Urgent
                                </option>
                                <option value={LEVELS.BLOCKING}>
                                    Blocking
                                </option>
                            </Field>
                            {
                                errors.level && touched.level &&
                                (
                                    <ErrorMessage name="level" component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit" className='btn btn-success btn-lg mt-3'>
                                {length > 0 ? 'Add New Task' : 'Create your First Task'}
                            </button>
                        </div>
                    </Form>
                )
            }
        </Formik>
    )
}

Taskform.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
