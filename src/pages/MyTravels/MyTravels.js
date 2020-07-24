import React from 'react'
import {useEffect,useState} from 'react';
import orderApi from '../../Api/orderApi'
import CurrentTravels from '../../Components/CurrentTravels/CurrentTravels'
import PastTravels from '../../Components/PastTravels/PastTravels'
import { useTranslation } from 'react-i18next';

export default() => {

    const [order, setOrders] = useState([]);
    const {t} = useTranslation("mytravels");
    useEffect(() => {
        orderApi.fetchUserOrders()
            .then(response => setOrders(response.data))
      }, [])

    return (
        <div>
            <h1>{t("upcommingtravels")}</h1>
            <CurrentTravels/>
            <h1>{t("pasttravels")}</h1>
            <PastTravels/>
        </div>
    )

    }