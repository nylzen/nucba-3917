import { Categorias } from "./components/Categorias/Categorias";
// import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Layout } from "./components/Layout/Layout";
// import { Navbar } from "./components/Navbar/Navbar";
import { Productos } from "./components/Productos/Productos";


// EL navbar y el footer estan comentados porque los agregamos dentro del layout
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Layout>
        <Hero />
        <Categorias />
        <Productos/>
      </Layout>
      {/* <Footer/> */}
    </>
  );
}

export default App;
// npm create vite , npm install borre todo lo no necesario
