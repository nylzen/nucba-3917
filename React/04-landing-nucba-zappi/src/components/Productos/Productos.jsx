import { products } from '../../data/Products'
import { Button } from '../UI/Button/Button'
import { CardProducto } from './CardProducto'
import * as s from './ProductosStyles'

export const Productos = () => {
  return (
    <s.ProductsWrapper>
      <h2>Nuestros productos</h2>
      <s.ProductsContainer>
        {products.map(product => (
          <CardProducto key={product.id} {...product}/>
        ))}
      </s.ProductsContainer>
      <s.ButtonContainer>
        <Button><span>Ver menos</span></Button>
        <Button disabled>Ver mas</Button>
      </s.ButtonContainer>
    </s.ProductsWrapper>
  )
}