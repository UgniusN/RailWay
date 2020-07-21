import React from 'react'
import 'date-fns';
import {Formik, Form, Field} from 'formik';
import { TextField } from 'formik-material-ui'
import travelApi from '../../../Api/travelApi'
import DateFnsUtils from '@date-io/date-fns';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import './EditTravel.css';


export default() => {

    const { id } = useParams();
    const [travel, setTravel] = useState({});

     useEffect(() => {
        travelApi.fetchTravelById(id)
          .then(resp => setTravel(resp.data));
      }, [id])

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const initialState = {
        start_destination: travel.start_destination,
        end_destination: travel.end_destination,
        date: travel.date,
        price: travel.price
    }
    return (
        <Formik
            initialValues={initialState}
            enableReinitialize
            onSubmit={values=> {
                const postDate = selectedDate.getFullYear() + "-" + selectedDate.getMonth() + "-" + selectedDate.getDay();
                travelApi.editTravel(values,postDate,id);
            }}
        >

            {(props) => (
                <div className="formBase">
                    <div class="deleteBlock">     
                        <Button variant="contained" color="secondary" disableElevation onClick={() =>travelApi.deleteTravel(id)}>Delete travel</Button>
                    </div>
                <div className="editTravelForm">
                    <Form>
                        <div>
                            <div>Start Destination:</div>
                            <Field name="start_destination" type="text" value="kazkascia" placeholder="Email" component={TextField}></Field>
                        </div>
                        <div className="labelis">
                            <div>End Destination:</div>
                            <Field name="end_destination" type="text" component={TextField}/>
                         </div>
                        <div className="labelis">
                            <div>Starts Destination:</div>
                            <Field name="price" type="text" component={TextField}/>
                        </div>
                        <div>
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
                            <Button type="submit" variant="contained" color="primary" disableElevation>Submit travel</Button>
                        </div>
                </Form>
                </div>
                </div>
            )}
        </Formik>
    )
}