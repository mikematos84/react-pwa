import React, { useEffect, useState } from 'react';
import withContextConsumer from "../../contexts/navigation/withContextConsumer"
import axios from 'axios';
import saveJsonToFile from '../../services/saveJsonToFile';

// Cleanup time slice 
Object.defineProperty(Array.prototype, 'cleanupTimeSlice', {
  value: function () {
    return this.map(x => {
      delete x.seconds;
      delete x.voiceState;
      return x;
    });
  }
});

const ConvertVADData = props => {
  const [rawTimeSlices, setRawTimeSlices] = useState({});
  const [timeSlices, setTimeSlices] = useState({});

  const [rawActivityData, setRawActivityData] = useState({});
  const [activityData, setActivityData] = useState({});

  const [nodeVADData, setNodeVADData] = useState({});

  useEffect(() => {
    // loadNodeVadDataNonStream();
    // loadNodeVadDataStream();
    loadTimeSliceData();
    loadActivityData();
  }, [])

  const loadNodeVadDataNonStream = async () => {
    let resp = await axios.get('http://localhost:3001/President_Obamas_best_speeches_no_audio-non-stream.json');
    console.log(resp.data.map(x => {
      delete x.audioData;
      return x;
    }));
  }

  const loadNodeVadDataStream = async () => {
    let resp = await axios.get('http://localhost:3001/President_Obamas_best_speeches_no_audio-stream.json');
    console.log(resp.data.map(x => {
      delete x.audioData;
      return x;
    }));
  }

  // load time slice data
  const loadTimeSliceData = async () => {
    let resp = await axios.get('http://localhost:3001/vad-realtime-time-slices.json');

    setRawTimeSlices(resp.data);
    const data = calculateTimeSliceDuration(resp.data)
      .filter(x => x.voiceState === 'active')
      .cleanupTimeSlice()

    saveJsonToFile('vad-realtime-time-slices-converted.json', data)
    setTimeSlices(data);
  }

  // load activity data 
  const loadActivityData = async () => {
    let resp = await axios.get('http://localhost:3001/vad-realtime-activity-data.json');
    // console.log(resp.data);
  }

  const calculateTimeSliceDuration = slices => {
    return slices.map((current, index) => {
      if (current.voiceState === 'active') {
        // resolve next index
        const nextIndex = index + 1;
        // resolve next slice
        const next = slices[nextIndex];
        // does slice index exist in array        
        if (nextIndex < slices.length) {
          current.duration = (next.seconds - current.seconds);
          current.startTime = current.seconds;
          // delete current.seconds;
        }
      }
      return current;
    })
  }

  return (
    <div className="wrapper content">
      Converted VAD Data

      <pre>
        {JSON.stringify(timeSlices, null, 2)}
      </pre>
    </div>
  )
}

export default withContextConsumer(ConvertVADData);