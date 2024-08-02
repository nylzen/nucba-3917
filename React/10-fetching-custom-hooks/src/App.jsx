import { MyAppStyled } from "./App.styles";
import Pokemon from "./components/PokemonCard/Card/Card";
import Search from "./components/Search/Search";
import GlobalStyles from "./styles/GlobalStyles";
import Loader from "./components/Loader/Loader";
// import { useAxios } from "./hooks/useAxios";
import { useSelector } from "react-redux";

// Como usar un fetch en react.
//   useEffect(() => {
//     fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//       .then(res => res.json())
//       .then(data => console.log(data))
// },[])

function App() {
  // const { data, isLoading, error, handleSubmit } = useAxios();
  const state = useSelector((state) => state.pokemon);

  return (
    <>
      <MyAppStyled>
        {/* <Search handleSubmit={handleSubmit} /> */}
        <Search />
        {state.isLoading && <Loader />}
        {state.error && <h2 style={{ color: "crimson" }}>{state.error}</h2>}
        {state.data && <Pokemon {...state.data} />}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
