import React from 'react'
import usersApi from '../../Api/travelApi'
import TravelCard from '../ControlPanel/Travel-Card/TravelCard'
import {useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress'; 

export default (props) => {
 
    const [travels, setTravels] = useState([]);

    const [filter, setFilter] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };
 
    const travelList = travels.map(travel => {
        if(travel.start_destination.toLowerCase().includes(filter.toLocaleLowerCase()) || travel.end_destination.toLowerCase().includes(filter.toLowerCase()))
        return (
            <div key={travel.id}>
                <TravelCard
                    startdestination={travel.start_destination}
                    enddestination={travel.end_destination}
                    price={travel.price}
                    id={travel.id}
                    date={travel.date}
                />
            </div>
        )
    })
 
    useEffect(() => {
        usersApi.fetchTravels()
            .then(response => setTravels(response.data))
            .finally(() => setIsLoading(false));
      }, [])
 
    return (
        <div>
                                        <TextField id="standard-basic" label="Search for a travel"
                            onChange={handleSearchChange} />
        <div className="cardbox">
            {isLoading ? <CircularProgress/> : travelList}
        </div>
        </div>
    )
}