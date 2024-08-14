import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../UI/Input/Input";
import Submit from "../UI/Submit/Submit";
import TextAreaInput from "../UI/TextAreaInput/TextAreaInput";

import { Form, FormBox, FormSubtitle, FormTitle } from "./FormTurn.styles";


// const inputs = [
//   {

//   }
// ]

const phoneRegex = /\d{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Campo requerido"),
  surname: Yup.string().trim().required("Campo requerido"),
  date: Yup.date().required(),
  age: Yup.number()
    .integer("Debe ser un numero entero")
    .moreThan(16, "Sos menor")
    .lessThan(95, "Descansa del trabajo")
    .required("Campo requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Campo requerido"),
  cellphone: Yup.string()
    .matches(phoneRegex, "Numero invalido")
    .required("Campo reuquerido"),
  comments: Yup.string().max(255, "Maximo de 255 caracteres").notRequired(),
});

export function FormTurn() {
  // const { getFieldProps, handleSubmit, errors, touched } = useFormik({
  //   initialValues: {
  //     name: "",
  //     surname: "",
  //     date: "",
  //     age: "",
  //     email: "",
  //     cellphone: "",
  //     comments: "",
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     console.log(values);
  //     // Mandar algo a la db
  //     resetForm();
  //   },
  // });

  // formik (props initialValues, validationSchema, onSubmit), dentro form, inputs, errors
  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{" "}
        <b>NucWorking</b>
      </FormSubtitle>

      <Formik
        initialValues={{
          name: "",
          surname: "",
          date: "",
          age: "",
          email: "",
          cellphone: "",
          comments: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Input
              label="Nombre"
              type="text"
              name="name"
              isError={touched.name && errors.name}
            />

            <Input
              label="Apellido"
              type="text"
              name="surname"
              isError={touched.surname && errors.surname}
            />
            <Input
              label="Fecha"
              type="date"
              name="date"
              isError={touched.date && errors.date}
            />
            <Input
              label="Edad"
              type="number"
              name="age"
              isError={touched.age && errors.age}
            />
            <Input
              label="Correo Electronico"
              type="email"
              name="email"
              isError={touched.email && errors.email}
            />
            <Input
              label="Telefono"
              type="tel"
              name="cellphone"
              isError={touched.cellphone && errors.cellphone}
            />
            <TextAreaInput
              label="¿Cómo escuchaste de nosotros?"
              name="comments"
              isError={touched.comments && errors.comments}
            />
            <Submit />
          </Form>
        )}
      </Formik>
    </FormBox>
  );
}
