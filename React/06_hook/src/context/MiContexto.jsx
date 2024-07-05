import { useState, createContext } from "react";

export const Contexto = createContext();

// export const ContextoProvider = ({ children }) => {
//   const data = {
//     color: "steelblue",
//     titulo: "Hola soy un texto",
//   };

//   return <Contexto.Provider value={data}>{children}</Contexto.Provider>;
// };

export const ContextoProvider = ({ children }) => {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };


  return (
    <Contexto.Provider value={{ count, increment, decrement }}>
      {children}
    </Contexto.Provider>
  );
};
