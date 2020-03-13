const fs = require('fs');
const path = require('path');

const save = (filename, data, encoding = 'utf8', callback = () => { }) => {
  fs.writeFile(
    path.join(__dirname, 'public/' + filename),
    JSON.stringify(data, null, 2),
    encoding,
    callback);
}

module.exports = (req, res) => {
  const { filename, data } = req.body;
  save(filename, data);
  res.json(data);
}