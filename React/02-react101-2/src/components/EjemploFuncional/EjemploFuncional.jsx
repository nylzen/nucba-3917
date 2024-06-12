import PropTypes from "prop-types";

export const EjemploFuncional = (props) => {
  // console.log(props.nombre)
  return (
    <>
      <h3>Hola soy, {props.nombre}</h3>
      <p>Mi edad es: {props.edad}</p>
      <hr />
    </>
  );
};

EjemploFuncional.defaultProps = {
  nombre: "Mundo",
  edad: 0,
};

EjemploFuncional.propTypes = {
  nombre: PropTypes.string,
  edad: PropTypes.number,
};
