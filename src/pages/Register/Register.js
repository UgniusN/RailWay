import React from "react";
import {Field, Form, Formik} from "formik";
import userControlAPI from "../../Api/userControlAPI";
import { Button } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import './Register.css';
 
const initialState = {
    user: '',
    pass: '',
    name: '',
    lastname: '',
    email: '',
    country: '',
}
 
export default () => {
 
    return (
        <Formik
            initialValues={initialState}
            onSubmit={values=> {
                userControlAPI.createUser(values);
       
            }}
        >
            {(props) => (
                <Form className="loginForm">
                    <div className="loginFields">
                    <div>
                        <label htmlFor="user">Username:</label>
                        <Field name="user" type="text" component={TextField} />
                    </div>
                    <div>
                        <label htmlFor="pass">Password:</label>
                        <Field name="pass" type="password" component={TextField} />
                    </div>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field name="name" type="text" component={TextField} />
                    </div>
                    <div>
                        <label htmlFor="lastname">Lastname:</label>
                        <Field name="lastname" type="text" component={TextField} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field name="email" type="text" component={TextField} />
                    </div>
                    <div>
                        <label htmlFor="country">Country:</label>
                        <Field name="country" type="text" component={TextField} />
                    </div>
                    <div className="mygtukas">
                        <Button variant="contained" color="primary" type="submit" className="buttonasregister">Register</Button>
                    </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}