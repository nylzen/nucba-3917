import { useContext } from "react";
import { Contexto } from "../../context/MiContexto";

export const IncrementButton = () => {
  const { increment } = useContext(Contexto);

  return <button onClick={increment}>IncrementButton</button>;
};
