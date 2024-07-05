import { useContext } from "react";
import { Contexto } from "../../context/MiContexto";

export const EjemploContexto = () => {
  const { color, titulo } = useContext(Contexto);

  return (
    <div>
      <h2 style={{ color: color }}>{titulo}</h2>
    </div>
  );
};
