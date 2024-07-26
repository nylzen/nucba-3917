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
import User from "../pages/User/User";
import AuthProvider, { AuthContext } from "../context/AuthContext";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
// import { useContext } from "react";

function Routes() {
  // const isAuth = useContext(AuthContext);
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ReactDomRoutes>
            <Route path="/" element={<Home />} />

            {/* Products */}
            {/* <Route path="products" element={<Products />} /> */}

            {/* Rutas anidadas */}
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productName" element={<Product />} />
            </Route>

            {/* Login */}
            {/* {!isAuth && <Route path="login" element={<Login />} />} */}
            <Route path="login" element={<Login />} />

            {/* Ruta dinamica */}
            <Route
              path="/user/:username"
              element={
                <ProtectedRoute redirecTo={"/login"}>
                  <User />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<h2>Error 404</h2>} />
          </ReactDomRoutes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routes;
