import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/fonts.css'
import LandingPage from './view/LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MapView from "./view/MapView/MapView";
import Members from "./view/Members/Members"
import FlightsProvider from "./container/FlightsProvider/FlightsProvider"
import PostsProvider from "./container/PostsProvider/PostsProvider"

ReactDOM.render(
  <React.StrictMode>
    <PostsProvider>
        <Router>
            <Switch>
                <Route exact path="/map" ><FlightsProvider><MapView /></FlightsProvider></Route>
                <Route exact path="/members" component={Members}/>
                <Route strict path="/" component={LandingPage}/>
            </Switch>
        </Router>
    </PostsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
