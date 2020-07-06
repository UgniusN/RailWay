import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TrainIcon from '@material-ui/icons/Train';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TravelCard from '../Application/Travel-Card/TravelCard'
import './Application.css';
import {useEffect,useState} from 'react';
import usersApi from '../../Api/usersApi'
import AppsIcon from '@material-ui/icons/Apps';
import Navigation from '../ControlPanel/Navigation/Navigation';
import ContolPanel from '../ControlPanel/ControlPanel';
import Profile from '../Profile/Profile'

import TravelList from '../Application/TravelList/TravelList'
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
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [travels, setTravels] = useState([]);

  useEffect(() => {
    usersApi.fetchTravels()
        .then(response => setTravels(response.data))
  }, [])
  

  const travelList = travels.map(travel => {
   return (
    <TravelCard startdestination={travel.start_destination} enddestination={travel.end_destination} price={travel.price}></TravelCard>
   )
 })


  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Railway
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link to="/" className={classes.Link}>
        <ListItem button key='Home'>
            <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            </Link>
            <Link to="/travels" className={classes.Link}>
            <ListItem className={classes.link} button key='Travels'>
            <ListItemIcon><TrainIcon/></ListItemIcon>
              <ListItemText primary={"Travels"} />
            </ListItem>
            </Link>
            <Link to="/mytravels" className={classes.Link}>
            <ListItem  button key='Mytravels'>
            <ListItemIcon><ConfirmationNumberIcon/></ListItemIcon>
              <ListItemText primary={"My Travels"} className="text-link"/>
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
            <ListItem button key='Home'>
              <ListItemIcon><AccountBoxIcon/></ListItemIcon>
              <ListItemText primary='My Cart'/>
            </ListItem>
            <Link to="/profile" className={classes.Link}>
              <ListItem className={classes.link} button key='My profile'>
              <ListItemIcon><TrainIcon/></ListItemIcon>
              <ListItemText primary={"My profile"}/>
              </ListItem>
            </Link>
            <Link to="/controlpanel" className={classes.Link}>
            <ListItem className={classes.link} button key='Log Out'>
            <ListItemIcon><AppsIcon/></ListItemIcon>
              <ListItemText primary='Control Panel'/>
            </ListItem>
            </Link>
            <ListItem className={classes.link} button key='Log Out'>
            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
              <ListItemText primary='Log Out'/>
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.root}>
        <Switch>
            <Route path="/travels">
            <TravelList></TravelList>
            </Route>
            <Route path="/mytravels">
          
            </Route>
            <Route path="/controlpanel">
              <ContolPanel></ContolPanel>
            </Route>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
        </Switch>
        
      </div>
      </main>
    </div>
    </Router>
    );
}