import React, { useState, useEffect, useRef } from "react";
import './Recorder.scss';

const Recorder = props => {
  const [mediaRecorder, setMediaRecorder] = useState({});
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    enableRecorder();
  }, [])

  useEffect(() => {
    let chunks = [];

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    }

    mediaRecorder.onstop = (e) => {
      let blob = new Blob(chunks, { type: 'video/mp4' });
      chunks = [];
      let url = (window.URL || window.webkitURL).createObjectURL(blob);
      console.log(url);
      playerRef.current.src = url;
    }

    console.log('MediaRecorder Ready');
  }, [mediaRecorder]);

  useEffect(() => {
    if (mediaRecorder.state !== undefined)
      console.log(mediaRecorder.state)
  }, [mediaRecorder, isRecording])

  const start = () => {
    if (isRecording) return;
    mediaRecorder.start(1000);
    setIsRecording(true);
  }

  const stop = () => {
    if (!isRecording) return;
    mediaRecorder.stop();
    setIsRecording(false);
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
      recorderRef.current.srcObject = stream;
      console.log("MediaRecorder Enabled")
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