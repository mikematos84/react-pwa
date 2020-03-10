import React from 'react';

const VadTimeSlicing = props => {
  return (
    <div className="wrapper content">
      <h3>VAD Time Slicing</h3>
      <ul>
        <li>
          Voice Activity detection <a href="https://www.npmjs.com/package/voice-activity-detection" target="_blank">https://www.npmjs.com/package/voice-activity-detection</a>
        </li>
        <li>
          Time Slicing (via ffmpeg) <a href="https://www.npmjs.com/package/ffmpeg" target="_blank">https://www.npmjs.com/package/ffmpeg</a>
        </li>
      </ul>
    </div>
  )
}

export default VadTimeSlicing;