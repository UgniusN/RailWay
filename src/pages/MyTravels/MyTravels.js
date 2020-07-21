import React from 'react'
import {useEffect,useState} from 'react';
import orderApi from '../../Api/orderApi'
import CurrentTravels from '../../Components/CurrentTravels/CurrentTravels'
import PastTravels from '../../Components/PastTravels/PastTravels'

export default() =>{

    const [order, setOrders] = useState([]);

    useEffect(() => {
        orderApi.fetchUserOrders()
            .then(response => setOrders(response.data))
      }, [])
      console.log(order)
    return (
        <div>
            <h1>Upcoming travels</h1>
            <CurrentTravels/>

            <h1>Past Travels</h1>
            <PastTravels/>
        </div>
    )

    }