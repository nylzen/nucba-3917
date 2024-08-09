import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from "./HeroStyles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categoriesSlice/categoriesSlice";
import { toast } from "sonner";

const Hero = ({doScroll}) => {
  const [value, setValue] = useState("");

  const listOfCategories = useSelector(
    (state) => state.categories.categories
  ).map((category) => category.category);

  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handlerSubmit = (e, value) => {
    e.preventDefault();

    const newCategory = value.trim().toLowerCase().split(" ").join("");

    const selectedCategory = listOfCategories.find(
      (category) => category.toLowerCase() === newCategory
    );

    if(selectedCategory){
      dispatch(selectCategory(selectedCategory))
      doScroll()
    } else {
      toast.error('Categoria no encontrada')
    }

    setValue('')
  };

  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            onChange={handleChange}
            value={value}
            type="text"
            placeholder="Ej. Pizzas a la piedra"
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={(e) => handlerSubmit(e, value)}
            radius="10"
            disabled={!value}
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png"
          alt=""
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
