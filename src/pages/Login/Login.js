import React, {useContext} from "react";
import {Field, Form, Formik} from "formik";
import {setCredentials} from "../../Api/index";
import {UserContext} from "../../App";
import userApi from "../../Api/userApi";
import { useHistory, useLocation } from "react-router-dom"
import { Button } from '@material-ui/core'
import { TextField } from 'formik-material-ui'
import {Link} from "react-router-dom";
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
                            <div>Username:</div>
                            <Field name="username" type="text" component={TextField} />
                        </div>
                        <div>
                            <div>Password:</div>
                            <Field name="password" type="password" component={TextField} />
                        </div>
                        <div className="mygtukas">
                            <Button variant="contained" color="primary" type="submit" className="buttonasLogin">Login</Button>
                        </div>
                        <div className="mygtukas">
                        <Link to="/register" className="buttonasRegister">
                            <Button variant="contained" color="primary" type="submit" className="buttonasRegister" >Register</Button>
                            </Link>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}