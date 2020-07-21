import React from 'react'
import 'date-fns';
import {Formik, Form, Field} from 'formik';
import { TextField } from 'formik-material-ui'
import usersApi from '../../../Api/travelApi'
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import './CreateTravel.css';



const initialState = {
    start_destination: '',
    end_destination: '',
    price: ''
}


export default() => {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    return (
        <Formik
            initialValues={initialState}
            onSubmit={values=> {
                const postDate = selectedDate.getFullYear() + "-" + selectedDate.getMonth() + "-" + selectedDate.getDay();
                usersApi.createTravel(values,postDate);
            }}
        >

            {(props) => (
                                <div className="createTravelForm">
                <Form>
                    <div>
                        <div>Start Destination:</div>
                        <Field name="start_destination" type="text" component={TextField}/>
                    </div>
                    <div className="labelis">
                        <div>End Destination:</div>
                        <Field name="end_destination" type="text" component={TextField}/>
                    </div>
                    <div className="labelis">
                        <div>Price:</div>
                        <Field name="price" type="text" component={TextField}/>
                    </div>
                    <div className="labelis">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="yyyy-MM-dd"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div>
                    <Button type="submit" variant="contained" color="primary" disableElevation className="createTravelButton">Create travel</Button>
                    </div>
                </Form>
                </div>
            )}
        </Formik>
    )
}