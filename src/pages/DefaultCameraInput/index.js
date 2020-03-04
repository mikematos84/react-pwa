import React from 'react';
// import '../../App.scss';
import CameraInput from '../../components/CameraInput';
import { currentPage } from '../../services/routerHelper';

const DefaultCameraInput = props => {
  return (
    <div className={currentPage(props.location)}>
      <CameraInput />
    </div>
  )
}

export default DefaultCameraInput;