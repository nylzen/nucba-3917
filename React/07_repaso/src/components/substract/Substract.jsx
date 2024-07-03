import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { CounterButton } from "./SubstractStyles";
import { useContext } from "react";
import { CountContext } from "../../context/CountContext";
import { TYPES } from "../../actionsTypes/countActions";

export const Substract = () => {

  const { dispatch } = useContext(CountContext)

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleDecrement_5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  return (
    <>
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
    </>
  );
};
