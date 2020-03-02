import React from 'react';
import './App.scss';
import { withAppInstall } from './AppInstall';
import Recorder from './Recorder';
import CameraInput from './CameraInput';

const App = props => {
  const userAgent = window.navigator.userAgent.toLowerCase();

  // Detects if device is on iOS 
  const isIos = () => {
    return /iphone|ipad|ipod/.test(userAgent);
  }

  // Detects if device is on Android
  const isAndroid = () => {
    return /android/.test(userAgent);
  }

  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

  return (
    <div className="App">
      <div>{userAgent}</div>
      {/* {isIos() && !isInStandaloneMode() || isAndroid() ? <CameraInput /> : <Recorder />} */}
      {isIos() || isAndroid() ? <CameraInput /> : <Recorder />}
    </div>
  );
}

export default withAppInstall(App);
