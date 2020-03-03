import React from 'react';
import '../../App.scss';
import MediaRecorderCapture from '../../components/MediaRecorderCapture';
import { currentPage } from '../../services/routerHelper';

const MediaRecorder = props => {
  return (
    <div className={currentPage(props.location)}>
      <MediaRecorderCapture />
    </div>
  )
}

export default MediaRecorder;