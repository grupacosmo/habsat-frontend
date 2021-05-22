import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './view/LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MapView from "./view/MapView/MapView";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/map" component={MapView}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
