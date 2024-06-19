import { categories } from "../../data/Categories";
import { Categoria } from "./Categoria";
import * as s from "./CategoriasStyles";
export const Categorias = () => {
  return (
    <s.CategoriasWrapper>
      <h2>Categorias</h2>
      <s.CategoriesContainer>
        {categories.map((category) => (
          <Categoria key={category.id} {...category}/>
        ))}
      </s.CategoriesContainer>
    </s.CategoriasWrapper>
  );
};
