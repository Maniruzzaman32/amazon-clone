//setup data layer
//we need this to track the basket

import { createContext, useContext, useReducer } from "react";

//THIS IS DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside component
export const useStateValue = () => useContext(StateContext);
