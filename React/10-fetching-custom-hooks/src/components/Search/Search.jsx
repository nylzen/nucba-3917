import { ImSearch } from "react-icons/im";
import { ButtonStyled, InputStyled, SearchFormStyled } from "./Search.styles";
import { useState } from "react";
import { fetchPokemon } from "../../redux/helpers/pokemonActions";
import { useDispatch } from "react-redux";

function Search() {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <SearchFormStyled
      onSubmit={(e) => {
        dispatch(fetchPokemon(e, pokemon));
        setPokemon("");
      }}
    >
      <InputStyled
        placeholder="Search"
        onChange={handleChange}
        value={pokemon}
      />
      <ButtonStyled type="submit">
        <ImSearch color="#555" />
      </ButtonStyled>
    </SearchFormStyled>
  );
}

export default Search;
