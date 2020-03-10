import React from 'react';

// Context
import withContextConsumer from '../../contexts/navigation/withContextConsumer';

const NotFound = props => {
  return (
    <div className="wrapper content">
      <div>Not Found</div>
    </div>
  )
}

export default withContextConsumer(NotFound);