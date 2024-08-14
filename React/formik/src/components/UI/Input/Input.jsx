import { ErrorMessage, Field } from "formik";
import {
  ErrorStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from "./Input.styles";



function Input({ label, type, name, isError }) {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      {/* <InputStyled name={name} type={type} id={label} {...field} error={isError} /> */}
      <Field type={type} id={label} name={name} error={isError} as={InputStyled} />

      {/* {isError && <ErrorStyled>Este campo es obligatorio</ErrorStyled>} */}
      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
}

export default Input;
