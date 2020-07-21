import React from 'react';
import Button from '@material-ui/core/Button';
import UserList from './TravelTable/TravelTable';
import '../ControlPanel/ControlPanel.css'
import CreateTravel from '../ControlPanel/CreateTravel/CreateTravel'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EditTravel from '../../pages/ControlPanel/EditTravel/EditTravel'
   import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";


export default () => (
    <Router>
    <div className="cpview">
    <Link to="/controlpanel/travellist">
    <Button variant="contained" color="primary">
        Manage Travels
     </Button>
     </Link>
     <Button variant="contained" color="primary">
        Manage Users
     </Button>
     <Button variant="contained" color="primary">
        Past Travels
     </Button>
     <Link to="/controlpanel/createtravel">
     <Button variant="contained" color="primary">
        Create Travel
     </Button>
     </Link>
     <Switch>
         <Route path="/controlpanel/travellist">
            <UserList/>
         </Route>
         <Route path="/controlpanel/createtravel">
            <CreateTravel/>
         </Route>
         <PrivateRoute path="/controlpanel/edittravel/:id">
              <EditTravel/>
            </PrivateRoute>
     </Switch>
    </div>
    </Router>
)