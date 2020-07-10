import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../Profile/Profile.css';
import Avatar from '../Profile/Avatar/Avatar'
import { UserContext } from '../../App';


export default () => {

const{user} = useContext(UserContext)

    return(
    <div className="profileButton">
    <div className="profileBase">
        <Avatar></Avatar>
        <h2>{user.name}</h2>
        <h2>{user.lastName}</h2>

        <h3>Email: ugniusnaujokas@gmail.com</h3>
        <h3>Country: Lithuania</h3>
    </div>
    </div>
    )
}