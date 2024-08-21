import { ErrorMessage, Field } from "formik";
import {
  ErrorMessageStyled,
  InputContainerStyled,
  LoginInputStyled,
} from "./LoginInputStyles";

const LoginInput = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <LoginInputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default LoginInput;
