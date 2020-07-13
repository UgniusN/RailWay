import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import FormikState from "../../Components/FormikState";
import {setCredentials} from "../../Api/index";
import {UserContext} from "../../App";
import userApi from "../../Api/userApi";
import { useHistory, useLocation } from "react-router-dom"
import { Button } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import './Login.css';

const initialValues = {
    username: '',
    password: ''
}

export default () => {
    const {login} = useContext(UserContext)
    const history = useHistory();
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/' } }

    
    const onSubmit = values => {
        setCredentials(values)

        userApi.getUser()
            .then(({data}) => {
                login(data)
                history.replace(from)
            })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {(props) => (
                <Form className="loginForm">
                    <div className="loginFields">
                        <div>
                            <label htmlFor="username">Username:</label>
                            <Field name="username" type="text" component={TextField} />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field name="password" type="password" component={TextField} />
                        </div>
                        <div className="mygtukas">
                            <Button variant="contained" color="primary" type="submit" className="buttonas">Login</Button>
                        </div>
                        <div className="mygtukas">
                        <Link to="/register">
                            <Button variant="contained" color="primary" type="submit" className="buttonasregister" >Register</Button>
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}