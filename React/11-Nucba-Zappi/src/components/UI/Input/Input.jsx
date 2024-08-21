import { ErrorMessage, Field } from "formik";
import {
  ErrorMessageStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from "./InputStyles";

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (
    // Field / ErrorMessage
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputBoxStyled>
          <InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>

          <InputStyled
            type={type}
            id={id}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />

          <ErrorMessage name={field.name}>
            {(msg) => <ErrorMessageStyled>{msg}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputBoxStyled>
      )}
    </Field>
  );
};

export default Input;
