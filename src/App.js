import React, { Suspense, useContext } from 'react';
import { withAppInstall } from './components/AppInstall';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Components
import Navigation from './components/Navigation';

// Services
import { debug } from './services/browser';
import { currentPage } from './services/routerHelper';

// Context
import { NavigationContext } from './contexts/navigation/Context';
import withContextProvider from './contexts/navigation/withContextProvider';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MediaRecorder from './pages/MediaRecorder';
import DefaultCameraInput from './pages/DefaultCameraInput';
import Sandbox from './pages/Sandbox';
import VadTimeSlicing from './pages/VadTimeSlicing';
import ConvertVADData from './pages/ConvertVADData';

const App = props => {
  const { navigation } = useContext(NavigationContext);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={`App ${currentPage(navigation.location)}`}>
          <Navigation />
          {debug()}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/default-camera-input" component={DefaultCameraInput} />
            <Route path="/media-recorder-capture" component={MediaRecorder} />
            <Route path="/sandbox" component={Sandbox} />
            <Route path="/vad-time-slicing" component={VadTimeSlicing} />
            <Route path="/convert-vad-data" component={ConvertVADData} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default withContextProvider(withAppInstall(App));
