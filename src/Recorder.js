import React, { useState, useEffect, useRef } from "react";
import './Recorder.scss';

const Recorder = props => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    enableRecorder();

    // playback recorded media
    playerRef.current.onloadedmetadata = (e) => {
      playerRef.current.play();
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
      playerRef.current.src = videoURL;
    }
  }, [mediaRecorder]);

  const start = () => {
    if (mediaRecorder.state === 'recording') return;
    mediaRecorder.start();
    setIsRecording(true);
    console.log(mediaRecorder.state);
  }

  const stop = () => {
    if (mediaRecorder.state === 'inactive') return;
    mediaRecorder.stop();
    setIsRecording(false);
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

      recorderRef.current.onloadedmetadata = (e) => {
        playerRef.current.play();
      }

      recorderRef.current.srcObject = stream;

      setMediaRecorder(new MediaRecorder(stream));
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <React.Fragment>
      <div>
        {!isRecording && <button onClick={start}>Start Recording</button>}
        {isRecording && <button onClick={stop} className={'recording'}>Stop Recodring</button>}
      </div>
      <div>
        <h3>Recorder</h3>
        <video
          className="recorder"
          ref={recorderRef}
          autoPlay
          playsInline
          muted
        />
      </div>
      <div>
        <h3>Playback</h3>
        <video
          className="player"
          controls
          ref={playerRef}
          autoPlay
          playsInline
        />
      </div>
    </React.Fragment>
  )
}

export default Recorder;