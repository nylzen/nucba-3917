import { useReducer } from "react";
import styled from "styled-components";

export const ReducerButton = styled.button``;


export const EjemploReducer = () => {
  const initialState = "orange";
  const reducer = (state, action) => {
    switch (action.type) {
      case "rojo":
        return "crimson";
      case "verde":
        return "greenyellow";
      case "azul":
        return "steelblue";
      case 'reset':
        return initialState
      default:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2 style={{ color: state }}>EjemploReducer</h2>
      <ReducerButton onClick={() => dispatch({type: 'rojo'})}>Rojo</ReducerButton>
      <ReducerButton onClick={() => dispatch({type: 'verde'})}>Verde</ReducerButton>
      <ReducerButton onClick={() => dispatch({type: 'azul'})}>Azul</ReducerButton>
      <ReducerButton onClick={() => dispatch({type: 'reset'})}>Reset</ReducerButton>
    </>
  );
};
