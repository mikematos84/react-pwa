import React, { useContext, useEffect } from 'react';
import { NavigationContext } from './Context';

const withContextConsumer = (Component) => {
  return props => {
    const { setNavigation } = useContext(NavigationContext);

    useEffect(() => {
      const { location, match } = props;
      setNavigation({ location, match });
    }, []);

    return (
      <React.Fragment>
        <Component props={props} />
      </React.Fragment>
    )
  }
}

export default withContextConsumer;