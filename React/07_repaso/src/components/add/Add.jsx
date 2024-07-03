import { useContext } from "react";
import { TYPES } from "../../actionsTypes/countActions";
import { CounterButton } from "./AddStyles";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { CountContext } from "../../context/CountContext";

export const Add = () => {
  const { dispatch } = useContext(CountContext);

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleIncremet_5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });
  return (
    <>
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
    </>
  );
};
