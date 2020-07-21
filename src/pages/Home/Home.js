import React from 'react'
import './Home.css';
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";


export default () => {
    return (
        <div className="homePageBase">
            <div>
                <div className="title"><b>Welcome to RailWay</b></div>
                <div className="title2">best train travel deals.</div>
                <div className="dealbutton">
                    <NavLink to={"/travels"} className="navlinkholder">
                    <Button variant="contained"  color="primary" disableElevation>Check the current deals</Button>
                    </NavLink>
                    </div>
            </div>
        </div>
    )
}