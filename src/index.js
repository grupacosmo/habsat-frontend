import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './view/LandingPage/LandingPage';
import LandingPageDemo from './view/LandingPageDemo/LandingPageDemo'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MapView from "./view/MapView/MapView";
import Members from "./view/Members/Members"

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/map" component={MapView}/>
              <Route exact path="/members" component={Members}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
