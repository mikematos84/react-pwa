import React from 'react';
// import '../../styles/_sandbox.scss';

import { useMediaDevices } from 'react-use';
import { currentPage } from '../../services/routerHelper';

const Sandbox = props => {
  const state = useMediaDevices();

  return (
    <div className={currentPage(props.location)}>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export default Sandbox;