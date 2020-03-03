import React, { useEffect, useRef } from 'react';

const CameraInput = props => {
  const playerRef = useRef();

  useEffect(() => {
    processFileInput();
  }, [])

  const processFileInput = () => {
    const fileInput = document.getElementById('file-input');
    fileInput.addEventListener('change', e => {
      playerRef.current.src = (window.webkitURL || window.URL).createObjectURL(fileInput.files[0]);
    })
  }

  return (
    <React.Fragment>
      <h1>Camera Input</h1>
      <input type="file" accept="video/*" id="file-input" capture="user"></input>
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

export default CameraInput;