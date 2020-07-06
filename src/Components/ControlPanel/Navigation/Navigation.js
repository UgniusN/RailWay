import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '../Card/Card';
import Userlist from '../UserList/Userlist';
import './Navigation.css';
import Notifications from '../Notifications/Nofitications'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <Router color='secondary'>
    <div className={classes.root}>
      <CssBaseline />
      <Drawer color='secondary'
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Dashboard', 'Manage travels', 'Manage users', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button key='aaaaa'>
              <ListItemText primary='aaaaa' />
            </ListItem>
            </Link>
            <Link to="/about">
            <ListItem className={classes.link} button key='bbbb'>
              <ListItemText primary='bbbbb' />
            </ListItem>
            </Link>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/">
            <div className="bandymas">
            <Card />
            <Card />
            <Card />
            </div>
            <Notifications/>
            </Route>
            <Route exact path="/about">
            <div className="bandymas">
            <Userlist/>
            </div>
            </Route>
            </Switch>
      </main>
    </div>
    </Router>
  );
}