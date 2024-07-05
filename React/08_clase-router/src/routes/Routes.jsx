import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import { Layout } from "../components/Layout/Layout";
import Products from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import Product from "../pages/Product/Product";
import User from '../pages/User/User'

function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />

          {/* Products */}
          {/* <Route path="products" element={<Products />} /> */}

          {/* Rutas anidadas */}
          <Route path="products">
            <Route index element={<Products/>}/>
            <Route path=":productName" element={<Product/>}/>
          </Route>

          {/* Login */}
          <Route path="login" element={<Login />} />

          {/* Ruta dinamica */}
          <Route path="/user/:username" element={<User/>}/>

          {/* 404 */}
          <Route path="*" element={<h2>Error 404</h2>} />
        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
