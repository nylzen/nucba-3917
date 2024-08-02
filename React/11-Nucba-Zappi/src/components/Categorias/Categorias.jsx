import { categories } from "../../data/Categories";
import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";

const Categorias = () => {
  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
