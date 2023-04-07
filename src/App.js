import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/global.css';
import LandingPage from './view/LandingPage/LandingPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapView from './view/MapView/MapView';
import Members from './view/Members/Members';
import LoginPage from './admin/LoginPage/LoginPage';
import AdminPanel from './admin/adminPanel/AdminPanel';
import FlightsProvider from './container/FlightsProvider/FlightsProvider';
import PostsProvider from './container/PostsProvider/PostsProvider';

import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const root = useRef(null);

  const handleMoveMouse = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    root.current?.classList.remove('cursor');
    root.current?.classList.add('cursorMove');
  };

  useEffect(() => {
    setTimeout(() => {
      root.current?.classList.remove('cursorMove');
      root.current?.classList.add('cursor');
    }, 300);
  }, [mousePosition]);

  return (
    <div ref={root} className="cursor" onMouseMove={handleMoveMouse}>
      <PostsProvider>
        <FlightsProvider>
          <Router>
            <Switch>
              <Route exact path="/map" component={MapView} />
              <Route exact path="/members" component={Members} />
              <Route exact path="/admin" component={AdminPanel} />
              <Route strict path="/" component={LandingPage} />
            </Switch>
          </Router>
        </FlightsProvider>
      </PostsProvider>
    </div>
  );
};

export default App;
