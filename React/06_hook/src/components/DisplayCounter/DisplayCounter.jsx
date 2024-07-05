import { useContext } from "react";
import { Contexto } from "../../context/MiContexto";

export const DisplayCounter = () => {
  const { count } = useContext(Contexto);

  return <h1>{count}</h1>;
};
