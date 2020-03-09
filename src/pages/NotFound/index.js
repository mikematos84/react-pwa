import React from 'react';

// Context
import withContextConsumer from '../../contexts/navigation/withContextConsumer';

const NotFound = props => {
  return (
    <div>Not Found</div>
  )
}

export default withContextConsumer(NotFound);