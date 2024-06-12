import { Ejemplo } from "../Ejemplo/Ejemplo"

/* eslint-disable react/prop-types */
export const Props = (props) => {
  const {titulo, texto} = props
  return (
    <div>
      <h1>Componente</h1>
      <Ejemplo titulo={titulo}/>
      <p>{texto}</p>
    </div>
  )
}