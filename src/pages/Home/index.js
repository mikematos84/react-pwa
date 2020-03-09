import React from 'react';
import { Redirect } from 'react-router-dom';

// Services
import { hasMediaRecorder } from '../../services/hasMediaRecorder';

import withContextConsumer from '../../contexts/navigation/withContextConsumer';

const Home = props => {
  return (
    <React.Fragment>
      <div>Determining best video capture method...</div>
      {
        hasMediaRecorder() ?
          <Redirect to="/media-recorder-capture" /> :
          <Redirect to="/default-camera-input" />
      }
    </React.Fragment>
  )
}

export default withContextConsumer(Home);