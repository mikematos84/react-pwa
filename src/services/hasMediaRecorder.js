// Detect if MediaRecorder is available
const hasMediaRecorder = () => {
  return !(typeof MediaRecorder === "undefined");
}

export { hasMediaRecorder }