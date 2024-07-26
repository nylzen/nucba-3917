import { useSelector } from "react-redux";
import Add from "../add/Add";
import Reset from "../reset/Reset";
import Substract from "../substract/Substract";
import {
  CounterButtonContainer,
  CounterContainer,
  CounterSpan,
} from "./Counter.styles";

function Counter() {
  const { count } = useSelector((state) => state);
  return (
    <CounterContainer>
      <CounterButtonContainer>
        <Substract />
        <CounterSpan>{count}</CounterSpan>
        <Add />
      </CounterButtonContainer>
      <Reset />
    </CounterContainer>
  );
}

export default Counter;
