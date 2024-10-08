import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";
import { addToCart } from "../../redux/cart/cartSlice";
import { toast } from "sonner";
const CardProducto = ({ img, title, desc, price, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductosCard>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button
          onClick={() =>{
            dispatch(addToCart({ img, title, desc, price, id }))
            toast.success('Producto agregado')
          }}
        >
          Agregar
        </Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
