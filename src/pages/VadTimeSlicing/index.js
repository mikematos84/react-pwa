import React, { useEffect, useState } from 'react';
import vad from 'voice-activity-detection';
import withContextConsumer from '../../contexts/navigation/withContextConsumer';
import saveJsonToFile from '../../services/saveJsonToFile';

const VadTimeSlicing = props => {
  const [voiceState, setVoiceState] = useState('inactive');
  const [voiceActivity, setVoiceActivity] = useState(0);
  const [activityData, setActivityData] = useState([]);
  let _activityData = [];
  const [timeSlices, setTimeSlices] = useState([]);
  let _timeSlices = [];

  useEffect(() => {
    const player = document.querySelector('video');
    let _vad = {};

    player.onloadedmetadata = () => {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      const stream = player.captureStream();
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
          setVoiceState('active');
          const data = {
            seconds: player.currentTime,
            voiceState: 'active'
          }
          setTimeSlices(prev => [...prev, data]);
          _timeSlices.push(data)
        },
        onVoiceStop: function () {
          setVoiceState('inactive');
          const data = {
            seconds: player.currentTime,
            voiceState: 'inactive'
          }
          setTimeSlices(prev => [...prev, data]);
          _timeSlices.push(data)
        },
        onUpdate: function (val) {
          setVoiceActivity(val);
          const data = {
            seconds: player.currentTime,
            voiceActivity: val
          }
          setActivityData(prev => [...prev, data]);
          _activityData.push(data);
        }
      };
      _vad = vad(audioContext, stream, options);
      _vad.disconnect();
    }

    player.onplay = () => {
      console.log('video playing');
      _vad.connect();
    }

    player.onpause = () => {
      console.log('video paused');
      _vad.disconnect();
    }

    player.onended = () => {
      console.log('video ended');
      _vad.disconnect();

      console.log(_timeSlices);
      saveJsonToFile('vad-realtime-time-slices.json', _timeSlices);

      setTimeout(() => {
        console.log(_activityData);
        saveJsonToFile('vad-realtime-activity-data.json', _activityData);
      }, 1000)
    }

  }, []);

  const filteredSegments = () => {
    /**
     * start time
     * end time
     * current time
     * duration
     */
    return timeSlices.filter(x => {
      if (x.voiceState === 'active')
        return x;
    });
  }

  return (
    <div className="wrapper content">
      <h3>VAD Time Slicing</h3>

      <video controls width={480}      >
        <source src="./assets/President_Obamas_best_speeches.mp4" />
        {/* <source src="./assets/President_Obamas_best_speeches_no_audio.mp4" /> */}
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

export default withContextConsumer(VadTimeSlicing);