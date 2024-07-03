import { useReducer } from "react";
import { createContext } from "react";
import { counterInitialState, counterReducer } from "../reducers/countReducer";

export const CountContext = createContext();

// eslint-disable-next-line react/prop-types
export const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const data = {
    state,
    dispatch,
  };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};
