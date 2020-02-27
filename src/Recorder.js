import React, { useState, useEffect, useRef } from "react";

const Recorder = props => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const videoRef = useRef();

  useEffect(() => {
    enableRecorder();

    // playback recorded media
    videoRef.current.onloadedmetadata = (e) => {
      videoRef.current.play();
    }
  }, [])

  useEffect(() => {
    if (!mediaRecorder) return;

    let chunks = [];

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    }

    mediaRecorder.onstop = (e) => {
      let blob = new Blob(chunks, { type: 'video/mp4' });
      chunks = [];
      let videoURL = window.URL.createObjectURL(blob);
      videoRef.current.src = videoURL;
    }
  }, [mediaRecorder]);

  const start = () => {
    if (mediaRecorder.state === 'recording') return;
    mediaRecorder.start();
    console.log(mediaRecorder.state);
  }

  const stop = () => {
    if (mediaRecorder.state === 'inactive') return;
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
  }

  const enableRecorder = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: {
          facingMode: 'user'
        }
      });
      setMediaRecorder(new MediaRecorder(stream));
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <React.Fragment>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
      <div>
        <video
          controls
          ref={videoRef}
          autoPlay
          playsInline
        />
      </div>
    </React.Fragment>
  )
}

export default Recorder;