import React, { useState, useEffect, useRef } from "react";
import './Recorder.scss';

const Recorder = props => {
  const [mediaRecorder, setMediaRecorder] = useState({});
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef();
  const playerRef = useRef();

  /**
   * Initialize the MediaRecorder on component mount
   */
  useEffect(() => {
    initializeMediaRecorder();
  }, [])

  /**
   * Upon MedaRecorder being set, monitor the following events
   */
  useEffect(() => {
    let chunks = [];

    mediaRecorder.ondataavailable = e => chunks.push(e.data)

    mediaRecorder.onstop = e => {
      let blob = new Blob(chunks, { type: 'video/mp4' });
      chunks = [];
      let url = (window.URL || window.webkitURL).createObjectURL(blob);
      setPlaybackPreview(url);
    }

    mediaRecorder.onerror = e => {
      console.log('Error recording stream');
      console.log(e.error);
    }

    console.log('MediaRecorder ready');
  }, [mediaRecorder]);

  /**
   * Helper function to console out change in state of the MediaRecorder
   */
  useEffect(() => {
    console.log(`MediaRecorder state: ${mediaRecorder.state}`)
  }, [mediaRecorder.state])

  /**
   * Start recording the stream
   */
  const start = async () => {
    if (mediaRecorder.state === 'recording') return;
    mediaRecorder.start();
    setIsRecording(true);
  }

  /**
   * Stop recording the stream
   */
  const stop = async () => {
    if (mediaRecorder.state === 'inactive') return;
    mediaRecorder.stop();
    setIsRecording(false);
    await initializeMediaRecorder();
  }

  /**
   * Set the playback player's source to the url of the newly recorderd stream
   * @param {string} url 
   */
  const setPlaybackPreview = url => {
    if (!playerRef.current) return;
    console.log(`Playback URL: ${url}`);
    playerRef.current.src = url;
  }

  /**
   * Get a media device stream (webcam)
   */
  const getStream = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: {
            facingMode: 'user'
          }
        });
        console.log('Stream fetched');
        resolve(stream);
      }
      catch (err) {
        console.log('Error in fetching stream')
        reject(err);
      }
    })
  }

  /**
   * Set the live stream retrieved from the media device
   * to the designated player to preview
   * @param {object} stream 
   */
  const setRecordingStreamPreview = stream => {
    if (!recorderRef.current) return;
    recorderRef.current.srcObject = stream;
  }

  /**
   * Create MediaRecorder object from a given stream
   * @param {object} stream 
   */
  const createMediaRecorder = stream => {
    return new Promise((resolve, reject) => {
      try {
        const mediaRecorder = new MediaRecorder(stream);
        console.log('New MediaRecorder created');
        resolve(mediaRecorder);
      }
      catch (err) {
        console.log('Error in creating new MediaRecorder');
        reject(err);
      }
    })
  }

  /**
   * Initialize MediaRecorder
   */
  const initializeMediaRecorder = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const stream = await getStream();
        setRecordingStreamPreview(stream);
        const mediaRecorder = await createMediaRecorder(stream);
        setMediaRecorder(mediaRecorder);
        resolve(mediaRecorder);
      }
      catch (err) {
        console.log('Error in initializing MediaRecorder of fetching media devices stream')
        reject(err);
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <button
          onClick={isRecording ? stop : start}
          className={isRecording ? 'recording' : ''}
        >{isRecording ? 'Stop' : 'Start'} Recording </button>
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