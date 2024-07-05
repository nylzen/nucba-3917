import { useParams } from "react-router-dom";
import { productList } from "../../data/productsData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 0 0;
  gap: 40px;

  img {
    width: 50%;
  }
`;

/* eslint-disable react/no-unescaped-entities */
function Product() {
  const navigate = useNavigate()
  const { productName } = useParams();
  const product = productList.find((p) => p.name === productName);
  console.log(product);
  return (
    <ProductContainer>
      <img src={product.src} alt="" />
      <div>
        <h2>Seccion de {productName}</h2>
        <button onClick={() => navigate('/')}>Volver atras</button>
      </div>
    </ProductContainer>
  );
}
export default Product;
