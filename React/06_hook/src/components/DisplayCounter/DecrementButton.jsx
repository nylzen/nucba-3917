import { useContext } from "react";
import { Contexto } from "../../context/MiContexto";

export const DecrementButton = () => {
  const { decrement } = useContext(Contexto);
  return <button onClick={decrement}>DecrementButton</button>;
};
