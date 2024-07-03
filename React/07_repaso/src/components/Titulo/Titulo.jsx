import { useContext } from "react";
import { CountContext } from "../../context/CountContext";

export const Titulo = () => {
  const { state } = useContext(CountContext);
  return <h1>{state.count}</h1>;
};
