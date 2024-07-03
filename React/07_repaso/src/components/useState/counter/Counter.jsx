import { useState } from "react";
import {
  CounterButton,
  CounterContainer,
  CounterSpan,
} from "./CounterStyles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <CounterContainer>
      <CounterButton left onClick={handleDecrement}>
        <AiOutlineMinusCircle size="32px" color="white" />
      </CounterButton>
      <CounterSpan>{count}</CounterSpan>
      <CounterButton onClick={handleIncrement}>
        <AiOutlinePlusCircle size="32px" color="white" />
      </CounterButton>
    </CounterContainer>
  );
};
