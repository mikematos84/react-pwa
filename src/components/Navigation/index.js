import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  return (
    <ul className="navigation">
      <li><NavLink to="/" exact>Home</NavLink></li>
      <li><NavLink to="/default-camera-input">Default Camera Input</NavLink></li>
      <li><NavLink to="/media-recorder-capture">MediaRecorder Capture</NavLink></li>
      <li><NavLink to="/sandbox">Sandbox</NavLink></li>
    </ul>
  )
}

export default Navigation;