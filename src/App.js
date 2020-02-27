import React from 'react';
import './App.scss';
import { withAppInstall } from './AppInstall';
import Webcam from './Webcam';
import Recorder from './Recorder';

const App = props => {
  return (
    <div className="App">
      <h1>Camera</h1>
      {/* <Webcam /> */}
      {<Recorder />}
    </div>
  );
}

export default withAppInstall(App);
