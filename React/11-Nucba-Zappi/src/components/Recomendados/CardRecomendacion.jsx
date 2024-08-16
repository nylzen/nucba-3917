import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/index";

import Button from "../UI/Button/Button";

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from "./CardsRecomendacionStyled";
import { addToCart } from "../../redux/cart/cartSlice";
import { toast } from "sonner";

const CardRecomendacion = ({ title, img, price, desc, id }) => {
  // console.log('[MESSI] - RECOMENDADO', props)

  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() => {
          dispatch(addToCart({ title, img, price, desc, id }));
          toast.success("Producto agregado");
        }}
      >
        Agregar
      </Button>
    </Card>
  );
};

export default CardRecomendacion;
