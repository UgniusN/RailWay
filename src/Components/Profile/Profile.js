import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../Profile/Profile.css';
import Avatar from '../Profile/Avatar/Avatar'


export default () => (
    <div className="profileButton">
    <div className="profileBase">
        <Avatar></Avatar>
        <h2>Ugnius Naujokas</h2>

        <h3>Email: ugniusnaujokas@gmail.com</h3>
        <h3>Country: Lithuania</h3>
    </div>
    </div>
)