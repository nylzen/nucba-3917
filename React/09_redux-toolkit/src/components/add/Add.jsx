import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { CounterButton } from "./Add.styles";
import { useDispatch } from "react-redux";
import { increment, increment_5, multiply } from "../../redux/slices/counterSlice";

function Add() {
  const dispatch = useDispatch()
  return (
    <>
      <CounterButton onClick={() => dispatch(increment())}>
        <AiOutlinePlusCircle size="32px" color="white" />
      </CounterButton>

      <CounterButton onClick={() => dispatch(increment_5())}>
        +<RiNumber5 size="32px" color="white" />
      </CounterButton>

      <CounterButton last onClick={() => dispatch(multiply())}>
        <FaRegTimesCircle size="32px" color="white" />
      </CounterButton>
    </>
  );
}

export default Add;
