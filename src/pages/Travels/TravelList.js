import React from 'react'
import usersApi from '../../Api/travelApi'
import TravelCard from '../ControlPanel/Travel-Card/TravelCard'
import {useEffect,useState} from 'react';

export default (props) => {

    const [travels, setTravels] = useState([]);

const travelList = travels.map(travel => {
    return (
        <div>
            <TravelCard 
                startdestination={travel.start_destination} 
                enddestination={travel.end_destination} 
                price={travel.price}
                id={travel.id} 
            />
        </div>
    )
    })

    useEffect(() => {
        usersApi.fetchTravels()
            .then(response => setTravels(response.data))
      }, [])

    return (
        <div class="cardbox">
            {travelList}
        </div>
    )
}