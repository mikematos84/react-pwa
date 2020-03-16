const fs = require('fs');
const VAD = require('node-vad');
const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
// const ffmpeg = require('ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const fileExists = (path) => {
  try {
    if (fs.existsSync(path)) {
      return true;
    }
  } catch (err) {
    return false;
  }
}

const extractAudio = async (input, output) => {
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .output(output)
      .on('end', (stdout, stderr) => {
        resolve();
      })
      .on('error', (err, stdout, stderr) => {
        reject(err);
      })
      .run()
  });
}

const saveJsonToFile = (filename, data, encoding = 'utf8', callback = () => { }) => {
  fs.writeFile(
    path.join(__dirname, filename),
    JSON.stringify(data),
    encoding,
    callback);
}

const processNonStream = (file) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const vad = new VAD(VAD.Mode.NORMAL);
    const stream = fs.createReadStream(file);
    stream.on("data", chunk => {
      chunks.push(chunk);
      vad.processAudio(chunk, 16000).then(res => {
        switch (res) {
          case VAD.Event.ERROR:
            console.log("ERROR");
            break;
          case VAD.Event.NOISE:
            console.log("NOISE");
            break;
          case VAD.Event.SILENCE:
            console.log("SILENCE");
            break;
          case VAD.Event.VOICE:
            console.log("VOICE");
            break;
        }
      }).catch(console.error);
    }).on("end", () => {
      saveJsonToFile('public/non-stream.json', chunks);
      resolve(chunks);
    }).on("error", (err) => {
      reject(err);
    });
  });
}

const processStream = async (file) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    const inputStream = fs.createReadStream(file);
    const vadStream = VAD.createStream({
      mode: VAD.Mode.NORMAL,
      audioFrequency: 16000,
      debounceTime: 1000
    });

    inputStream.pipe(vadStream).on("data", chunk => {
      chunks.push(chunk);
    }).on("end", () => {
      saveJsonToFile('public/stream.json', chunks);
      resolve(chunks);
    }).on("error", (err) => {
      reject(err);
    });
  })
}

module.exports = async (req, res) => {
  const { type, file } = req.params;
  if (!file) {
    res.json({ message: "Missing file" });
  }

  const videoFile = path.join(__dirname, 'public/' + file);
  const audioFile = videoFile.substring(0, videoFile.lastIndexOf('.')) + '.mp3';

  if (!fileExists(audioFile))
    await extractAudio(videoFile, audioFile);

  let result = null;

  // Non-Stream Example
  if (type && type.toLowerCase() === 'non-stream')
    result = await processNonStream(audioFile);

  // Stream Example
  if (type && type.toLowerCase() === 'stream')
    result = await processStream(audioFile);

  if (result !== null)
    res.json(result);
  else
    res.json({ message: "Error processing audio" })
};
