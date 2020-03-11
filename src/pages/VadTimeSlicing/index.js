import React, { useEffect, useState } from 'react';
import vad from 'voice-activity-detection';

const VadTimeSlicing = props => {
  const [voiceState, setVoiceState] = useState('inactive');
  const [voiceActivity, setVoiceActivity] = useState(0);
  const [activityData, setActivityData] = useState([]);
  const [timeSlices, setTimeSlices] = useState([]);

  useEffect(() => {
    const player = document.querySelector('video');
    const audioContext = new AudioContext();
    const stream = player.captureStream();
    let _vad = {};
    var options = {
      fftSize: 1024,
      bufferLen: 1024,
      smoothingTimeConstant: 0.2,
      minCaptureFreq: 85,         // in Hz
      maxCaptureFreq: 255,        // in Hz
      noiseCaptureDuration: 1000, // in ms
      minNoiseLevel: 0.4,         // from 0 to 1
      maxNoiseLevel: 0.7,         // from 0 to 1
      avgNoiseMultiplier: 1.2,
      onVoiceStart: function () {
        setTimeSlices(prev => [...prev, {
          seconds: player.currentTime,
          voiceState: 'active'
        }])
        setVoiceState('active');
      },
      onVoiceStop: function () {
        setTimeSlices(prev => [...prev, {
          seconds: player.currentTime,
          voiceState: 'inactive'
        }])
        setVoiceState('inactive');
      },
      onUpdate: function (val) {
        setVoiceActivity(val);
        setActivityData(prev => [...prev, {
          seconds: player.currentTime,
          voiceActivity: val
        }])
      }
    };

    player.onloadeddata = () => {
      _vad = vad(audioContext, stream, options);
      _vad.disconnect();
    }

    player.onplay = () => {
      console.log('video playing');
      _vad.connect();
    }

    player.onpause = () => {
      console.log('video paused')
      _vad.disconnect();
    }

  }, [])

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

      <video
        controls
        width={480}
      >
        <source src="./assets/President_Obamas_best_speeches.mp4" />
      </video>
      <div>Voice State: <strong>{voiceState}</strong></div>
      <div>Current voice activity value: <strong>{voiceActivity}</strong></div>
      <pre>
        {
          JSON.stringify(timeSlices, null, 2)
        }
      </pre>
    </div>
  )
}

export default VadTimeSlicing;