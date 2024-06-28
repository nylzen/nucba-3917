/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import styled from "styled-components";

const InputForm = styled.input`
  height: 2rem;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  border-bottom: 1px solid #4747ff;
  color: white;
  margin-top: 2rem;
`;

export const EjemploOnChange = () => {
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  const handleValue = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value);
  };

  // No poner un array de dependencias es igual a poner solo el console.log()
  // console.log('holi')
  // useEffect(() => {
  //   console.log("holi");
  // });

  useEffect(() => {
    console.log("Fase de montaje");
  }, []);

  useEffect(() => {
    console.log("El valor del estado cambio");
  }, [value]);

  useEffect(() => {
    console.log("El estado cambio")
  },[click, value])

  const handleClick = () => {
    setClick(!click)
  };

  return (
    <form>
      <p>{value || "El input esta vacio"}</p>
      <InputForm onChange={handleValue} placeholder="Escribi lo que sea" />
      <p onClick={handleClick}>{click ? "true" : "false"}</p>
    </form>
  );
};
