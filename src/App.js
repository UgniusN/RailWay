import React from 'react';
import './App.css';
import Navigation from './Components/ControlPanel/Navigation/Navigation'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import red from '@material-ui/core/colors/red'
import ApplicationView from './Components/Application/ApplicationView'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore } from 'redux'
import store from './store'
import rootReducer from './reducers'


function App() {
  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <ApplicationView/>
      </Provider>
  );
}

export default App;
