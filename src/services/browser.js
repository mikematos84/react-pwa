import React from 'react';
import { userAgent, isIos, isSafari } from './userAgent';
import { hasMediaRecorder } from './hasMediaRecorder';

const debug = () => (
  <table>
    <tbody>
      <tr><td>User Agent</td><td>{userAgent.toString()}</td></tr>
      <tr><td>Is iOS</td><td>{isIos().toString()}</td></tr>
      <tr><td>Is Safari</td><td>{isSafari().toString()}</td></tr>
      <tr><td>Has MediaRecorder</td><td>{hasMediaRecorder().toString()}</td></tr>
      <tr><td>Environment</td><td>{process.env.NODE_ENV}</td></tr>
      <tr><td>Public URL</td><td>{process.env.PUBLIC_URL}</td></tr>
    </tbody>
  </table>
)

export {
  debug
}