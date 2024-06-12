// import { useState } from "react";
import "./App.css";
// import { Condicional } from "./components/Condicional/Condicional";
// import { EjemploFuncional } from "./components/EjemploFuncional/EjemploFuncional";
// import { Props } from "./components/Props/Props";
import { Arrays } from "./components/Arrays/Arrays";
import { Navbar } from "./components/Navbar/Navbar";
// import { Ejemplo } from "./components/Ejemplo/Ejemplo";


function App() {
  // console.log('hola')
  // const [isLogged, setIsLogged] = useState(false)
  const nombre = "Bienvenidos a React";
  // const isLogged = true


  return (
    <div>
      <Navbar/>
      <h1>{nombre}</h1>
      <h2>{2 + 2}</h2>
      {/* <Ejemplo/> */}
      {/* <EjemploFuncional nombre={"Nelson"} edad={29} />
      <EjemploFuncional nombre={"Messi"} edad={20} />
      <EjemploFuncional nombre={"Fran"} edad={22} />
      <EjemploFuncional />
      <Props titulo='Blog' texto='Texto de prueba'/>
      <Condicional isLogged={isLogged}/> */}
      {/* <Condicional isLogged={false}/> */}
      {/* <button onClick={() => setIsLogged(!isLogged)}>Click</button> */}
      <Arrays/>
    </div>
  );
}

export default App;
