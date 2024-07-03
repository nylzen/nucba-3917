import { CounterContainer, CounterSpan } from "./CounterStyles";
import { CounterButtonContainer } from "./CounterStyles";

import { useContext } from "react";
import { CountContext } from "../../context/CountContext";
import { Substract } from "../substract/Substract";
import { Add } from "../add/Add";
import { Reset } from "../reset/Reset";

export const Counter = () => {
  const { state } = useContext(CountContext);

  return (
    <CounterContainer>
      <CounterButtonContainer>
        <Substract />
        <CounterSpan>{state.count}</CounterSpan>
        <Add />
      </CounterButtonContainer>
      <Reset />
    </CounterContainer>
  );
};
