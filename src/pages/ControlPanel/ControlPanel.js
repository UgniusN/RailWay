import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import UserList from '../ControlPanel/UserList/Userlist';
import '../ControlPanel/ControlPanel.css'
import CreateTravel from '../ControlPanel/CreateTravel/CreateTravel'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default () => (
    <Router>
    <div className="cpview">
    <Link to="/controlpanel/travellist">
    <Button variant="contained" color="secondary">
        Manage Travels
     </Button>
     </Link>
     <Button variant="contained" color="secondary">
        Manage Users
     </Button>
     <Button variant="contained" color="secondary">
        Past Travels
     </Button>
     <Link to="/controlpanel/createtravel">
     <Button variant="contained" color="secondary">
        Secondary
     </Button>
     </Link>
     <Switch>
     <Route path="/controlpanel/travellist">
            <UserList/>
            </Route>
      <Route path="/controlpanel/createtravel">
            <CreateTravel/>
            </Route>
     </Switch>
    </div>
    </Router>
)