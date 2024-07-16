import { createContext, useContext, useReducer } from "react";

//preparing the Data Layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pull informstion from the DAta layer
export const useStateValue = () => useContext(StateContext);
