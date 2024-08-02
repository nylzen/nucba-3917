import { recommended } from "../../data/Recommended";
import CardRecomendacion from "./CardRecomendacion";

import { CardsContainer } from "./CardsRecomendacionStyled";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {/* <CardRecomendacion />
      <CardRecomendacion />
      <CardRecomendacion />
      <CardRecomendacion /> */}
      {recommended.map((recomendado) => (
        <CardRecomendacion key={recomendado.id} {...recomendado}/>
        // <CardRecomendacion key={recomendado.id} title={recomendado.title} price={recomendado.price}/>
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
