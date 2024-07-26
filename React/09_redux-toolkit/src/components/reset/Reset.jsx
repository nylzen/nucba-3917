import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/slices/counterSlice";

function Reset() {
  const dispatch = useDispatch()
  return <BiReset cursor="pointer" size="38px" color="#f24c4c" onClick={() => dispatch(reset('Holis'))}/>;
}

export default Reset;
