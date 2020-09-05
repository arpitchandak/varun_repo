import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './webUI/routes';
import RoutesMOB from './mobileUI/routes';
import DataListLoader from './DataListLoader';
import { isMobile } from 'react-device-detect';
import { Router } from 'react-router-dom';
import History from './History';

function App() {
    if (isMobile) {
        return(
          <React.Fragment>
          <Router history={History}>
            <RoutesMOB/>
          </Router>
        </React.Fragment>
        )
    } else {
      return(

        <React.Fragment>
        <Router  history={History}>
          <Routes/>
        </Router>
      </React.Fragment>
       
      ) 
  }
}

export default App;
