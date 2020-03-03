import React from 'react';
import './App.scss';
import { withAppInstall } from './AppInstall';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MediaRecorder from './pages/MediaRecorder';
import DefaultCameraInput from './pages/DefaultCameraInput';
import Sandbox from './pages/Sandbox';
import { debug } from './services/browser';

const App = props => {
  return (
    <Router basename="/react-pwa">
      <div className="App">
        <ul className="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/default-camera-input">Default Camera Input</Link></li>
          <li><Link to="/media-recorder-capture">MediaRecorder Capture</Link></li>
          <li><Link to="/sandbox">Sandbox</Link></li>
        </ul>
        {debug()}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/default-camera-input" component={DefaultCameraInput} />
          <Route path="/media-recorder-capture" component={MediaRecorder} />
          <Route path="/sandbox" component={Sandbox} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default withAppInstall(App);
