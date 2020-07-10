import React from 'react'
import usersApi from '../../../../Api/usersApi'
import TravelCard from '../../Travel-Card/TravelCard'
import {useEffect,useState} from 'react';

export default (props) => {

    const [travels, setTravels] = useState([]);

const travelList = travels.map(travel => {
    return (
        <div>
     <TravelCard startdestination={travel.start_destination} enddestination={travel.end_destination} price={travel.price}></TravelCard>
     </div>
    )
  })

    useEffect(() => {
        usersApi.fetchTravels()
            .then(response => setTravels(response.data))
      }, [])

    return(
        <div class="cardbox">{travelList}</div>
    )
}