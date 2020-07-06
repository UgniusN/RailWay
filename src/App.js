import React from 'react';
import './App.css';
import Navigation from './Components/ControlPanel/Navigation/Navigation'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import red from '@material-ui/core/colors/red'
import ApplicationView from './Components/Application/ApplicationView'



function App() {
  return (
      <ApplicationView/>
  );
}

export default App;
