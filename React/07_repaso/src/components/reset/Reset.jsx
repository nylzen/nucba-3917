import { BiReset } from "react-icons/bi";
import { TYPES } from "../../actionsTypes/countActions";
import { useContext } from "react";
import { CountContext } from "../../context/CountContext";

export const Reset = () => {
  const { dispatch } = useContext(CountContext);

  const handleReset = () => dispatch({ type: TYPES.RESET });
  return (
    <BiReset
      cursor="pointer"
      size="38px"
      color="crimson"
      onClick={handleReset}
    />
  );
};
