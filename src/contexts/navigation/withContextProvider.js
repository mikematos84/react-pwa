import React, { useState } from 'react';
import { NavigationContext, initialState } from './Context';

const withContextProvider = (Component) => {
  return props => {

    const [navigation, setNavigation] = useState(initialState);

    return (
      <NavigationContext.Provider value={{ navigation, setNavigation }}>
        <Component props={props} />
      </NavigationContext.Provider>
    )
  }
}

export default withContextProvider;
