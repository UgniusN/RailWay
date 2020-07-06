import React from 'react'
import {Formik, Form, Field} from 'formik';
import usersApi from '../../../Api/usersApi'


const initialState = {
    start_destination: '',
    end_destination: '',
    price: ''
}

export default() => {
    return (
        <Formik
            initialValues={initialState}
            onSubmit={values=> {
                usersApi.createTravel(values);
        
            }}
        >

            {(props) => (
                <Form>
                    <div>
                        <label htmlFor="start_destination">Start Destination:</label>
                        <Field name="start_destination" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="end_destination">End Destination:</label>
                        <Field name="end_destination" type="text"/>
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <Field name="price" type="text"/>
                    </div>
                    <div>
                        <input type="submit" value="Create"></input>
                    </div>
                </Form>
            )}
        </Formik>
    )
}