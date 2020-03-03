import React from 'react';
import { Redirect } from 'react-router-dom';
import '../../App.scss';

// Services
import { hasMediaRecorder } from '../../services/hasMediaRecorder';
import { currentPage } from '../../services/routerHelper';

const Home = props => {
  return (
    <div className={currentPage(props.location)}>
      <div>Determining best video capture method...</div>
      {
        hasMediaRecorder() ?
          <Redirect to="/media-recorder-capture" /> :
          <Redirect to="/default-camera-input" />
      }
    </div>
  )
}

export default Home;