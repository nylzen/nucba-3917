// import { Counter } from "./components/useState/counter/Counter";
// import { Counter } from "./components/useReducer/Counter";
import { Titulo } from "./components/Titulo/Titulo";
import { Counter } from "./components/useContext/Counter";
import { CountContextProvider } from "./context/CountContext";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <CountContextProvider>
        {/* <Counter/> useState*/}
        {/* <Counter /> */}
        <Titulo />
        <Counter />
      </CountContextProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
