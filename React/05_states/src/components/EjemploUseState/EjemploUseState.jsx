import { useState } from "react";
import styled from "styled-components";

export const ClickButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #4747ff;
  color: white;
  border-radius: 10px;
  display: block;
`;

export const EjemploUseState = () => {
  // const [state, setState] = useState(0);
  const [isToggle, setIsToggle] = useState(true);


  const handleToggle = () => {
    setIsToggle(!isToggle)
  }


  return (
    <>
      <span>{isToggle ? "Es true" : "Es false"}</span>
      <ClickButton onClick={handleToggle}>Toggle</ClickButton>
    </>
  );
};
