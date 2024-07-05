import { productList } from "../../data/productsData";
import { Card, LinkItem, ProductContainer, Title } from "./ProductsStyles";

function Products() {
  return (
    <>
      <Title>Puede ser pa?</Title>
      <ProductContainer>
        {productList?.map((product) => (
          <Card key={product.id}>
            <img src={product.src} alt={product.name} />
            <h2>{product.name}</h2>
            <span>{product.year}</span>
            <LinkItem to={`/products/${product.name}`}>Ver mas</LinkItem>
          </Card>
        ))}
      </ProductContainer>
    </>
  );
}

export default Products;
