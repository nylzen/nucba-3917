import "./App.css";
import { DecrementButton } from "./components/DisplayCounter/DecrementButton";
import { DisplayCounter } from "./components/DisplayCounter/DisplayCounter";
import { IncrementButton } from "./components/DisplayCounter/IncrementButton";
// import { EjemploContexto } from "./components/EjemploContexto/EjemploContexto";
import { Layout } from "./components/Layout/Layout";
// import { Nivel1 } from "./components/Nivel1/Nivel1";
// import { EjemploReducer } from './components/EjemploReducer/EjemploReducer'

// console.log("hola desde afuera");

function App() {
  // const user = { name: "Messi", isLogged: true };
  // const [state, setState] = useState(true);
  // console.log("hola desde adentro");

  // const handleClick = () => {
  //   setState(!state);
  // };

  return (
    <Layout>
      {/* <h1>React App</h1> */}
      {/* <EjemploReducer/> */}
      {/* <Nivel1 user={user} /> */}
      {/* <EjemploContexto/> */}
      <DisplayCounter />
      <IncrementButton />
      <DecrementButton />
    </Layout>
  );
}

export default App;
