import React,{ useContext } from 'react'
import { Paper } from '@material-ui/core'
import './OrderConfirmation.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import travelApi from '../../Api/travelApi';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import orderApi from '../../Api/orderApi'
import Snackbar from '@material-ui/core/Snackbar';
import Moment from 'moment'


export default () => {
    const { id } = useParams();
    const [travel, setTravel] = useState({});
    
    useEffect(() => {
        travelApi.fetchTravelById(id)
          .then(resp => setTravel(resp.data));
      }, [id])

    const{user} = useContext(UserContext)
    

    let order = {
        travelid : travel.id,
        userid: user.userid,
    }

    let nowDate = Moment()

    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
      };

      function createOrderNotification(order) {
        orderApi.createOrder(order);
        handleClick({ vertical: 'top', horizontal: 'left' });
      }

      console.log(nowDate)

    return(
    <div className="orderpage">
        <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Order complete"
        key={vertical + horizontal}
        severity="success"
      />
    </div>
        <Paper className="orderstructure" elevation={3}>
            <div className="orderImageContainer" />
            <div className="orderContent">
                <div>
                    <p className="orderheadertext">Departure station:</p>
                    <p>{travel.start_destination}</p>
                </div>
            <div>
            <p className="orderheadertext">Arrival station:</p>
            <p>{travel.end_destination}</p>
            </div>
            <div>
            <p className="orderheadertext">Travel date:</p>
            <p>{travel.date}</p>
            </div>
            <div>
            <Button color="primary" onClick={() =>createOrderNotification(order)}>
                Purchase
            </Button>
            </div>
            </div>
        </Paper>
    </div>
    )
}