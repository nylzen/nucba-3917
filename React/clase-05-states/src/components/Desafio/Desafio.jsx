import { useState } from "react";
import { ClickButton } from "../EjemploUseState/EjemploUseState";
import { useEffect } from "react";
import { useRef } from "react";
export const Desafio = () => {
  const [counter, setCounter] = useState(0);

  let id = useRef()

  useEffect(() => {
     id.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    console.log(id);
  }, []);

  const stopIncrement = () => {
    clearInterval(id.current)
    setCounter(0)
    id.current = setInterval(() => {
      setCounter(prev => prev + 1)
    }, 1000)
  };

  return (
    <>
      <span>{counter}</span>
      <ClickButton onClick={stopIncrement}>Stop</ClickButton>
    </>
  );
};
