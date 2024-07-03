import { CounterButton, CounterContainer, CounterSpan } from "./CounterStyles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { CounterButtonContainer } from "./CounterStyles";
import { BiReset } from "react-icons/bi";
import { useReducer } from "react";
import {
  counterInitialState,
  counterReducer,
} from "../../reducers/countReducer";
import { TYPES } from "../../actionsTypes/countActions";

export const Counter = () => {
  // Una fn reductora, estado inicial
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);
  // console.log(state)

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleIncremet_5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleDecrement_5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });

  const handleReset = () => dispatch({ type: TYPES.RESET });

  return (
    <CounterContainer>
      <CounterButtonContainer>
        <CounterButton left onClick={handleDivide}>
          <FiDivideCircle size="32px" color="white" />
        </CounterButton>
        <CounterButton onClick={handleDecrement_5}>
          <p>
            -<RiNumber5 size="32px" color="white" />
          </p>
        </CounterButton>
        <CounterButton onClick={handleDecrement}>
          <AiOutlineMinusCircle size="32px" color="white" />
        </CounterButton>

        <CounterSpan>{state.count}</CounterSpan>

        <CounterButton onClick={handleIncrement}>
          <AiOutlinePlusCircle size="32px" color="white" />
        </CounterButton>
        <CounterButton onClick={handleIncremet_5}>
          <p>
            +<RiNumber5 size="32px" color="white" />
          </p>
        </CounterButton>
        <CounterButton right onClick={handleMultiply}>
          <FaRegTimesCircle size="32px" color="white" />
        </CounterButton>
      </CounterButtonContainer>

      <BiReset
        cursor="pointer"
        size="38px"
        color="crimson"
        onClick={handleReset}
      />
    </CounterContainer>
  );
};
