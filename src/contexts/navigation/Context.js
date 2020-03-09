import React from 'react';

const initialState = {
  location: {},
  match: {}
};
const NavigationContext = React.createContext(initialState);

export { NavigationContext, initialState };