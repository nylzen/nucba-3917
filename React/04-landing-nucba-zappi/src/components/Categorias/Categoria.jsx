import * as s from "./CategoriasStyles";

export const Categoria = ({ img, title, category }) => {
  return (
    <s.CardCategory whileTap={{ scale: 0.95 }}>
      <img src={img} alt={category} />
      <h2>{title}</h2>
      <s.BorderDecoration />
    </s.CardCategory>
  );
};
