import React, { useEffect } from 'react';

import MediaRecorderCapture from '../../components/MediaRecorderCapture';

import withContextConsumer from '../../contexts/navigation/withContextConsumer';

const MediaRecorder = props => {

  useEffect(() => {
    console.log(props);
  }, [])

  return (
    <MediaRecorderCapture />
  )
}

export default withContextConsumer(MediaRecorder);