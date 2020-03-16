import axios from 'axios';

const saveJsonToFile = (filename, data = {}) => {
  axios.post('http://localhost:3001/save', {
    filename,
    data,
  })
    .then(response => {
      console.log(response);
    });
}

export default saveJsonToFile;