import React, { useEffect } from 'react';

// Component
import MediaRecorderCapture from '../../components/MediaRecorderCapture';

// Context
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