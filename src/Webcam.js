import React, { useState, useEffect, useRef } from 'react';

const Webcam = props => {
  const [mediaStream, setMediaStream] = useState(null);
  const videoRef = useRef();

  // componentDidMount
  useEffect(() => {
    enableStream();

    // componentWillUnmount
    return (() => {

    })
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

  const enableStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: 'environment' }
      });
      setMediaStream(stream);
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleCanPlay = () => {
    videoRef.current.play();
  }

  return (
    mediaStream &&
    <React.Fragment>
      <video
        ref={videoRef}
        onCanPlay={handleCanPlay}
        autoPlay
        playsInline
        muted
      />
    </React.Fragment>
  )
}

export default Webcam;