import { Logout } from "./Logout";
import { Logueado } from "./Logueado";

// eslint-disable-next-line react/prop-types
export const Condicional = ({isLogged}) => {

  return (
    <div>
      <h1>Condicion</h1>
      {isLogged ? <Logueado /> : <Logout />}
      {isLogged && <h2>Holis</h2>}
      {/* {isLogged ? <h2>Holis</h2> : null} */}
    </div>
  );
};
