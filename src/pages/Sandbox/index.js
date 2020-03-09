import React from 'react';
import { useMediaDevices } from 'react-use';

// Context
import withContextConsumer from '../../contexts/navigation/withContextConsumer';

const Sandbox = props => {
  const state = useMediaDevices();

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  )
}

export default withContextConsumer(Sandbox);