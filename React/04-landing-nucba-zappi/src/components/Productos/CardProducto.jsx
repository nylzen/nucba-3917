import { Button } from '../UI/Button/Button'
import * as s from './ProductosStyles'

export const CardProducto = (props) => {
  const { img, title, price, desc} = props
  return (
    <s.ProductCard>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <s.ContainerPrice>
        <s.CardPrice>${price}</s.CardPrice>
        <Button>Agregar</Button>
      </s.ContainerPrice>
    </s.ProductCard>
  )
}