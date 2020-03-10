import React, { useEffect } from 'react';
import { useMediaDevices } from 'react-use';

// Context
import withContextConsumer from '../../contexts/navigation/withContextConsumer';

const Sandbox = props => {
  const state = useMediaDevices();

  return (
    <div className="wrapper content">
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export default withContextConsumer(Sandbox);