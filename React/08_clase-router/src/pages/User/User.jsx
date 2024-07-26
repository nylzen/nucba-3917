import { useParams } from "react-router-dom";
import { Button } from "../Login/LoginStyles";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function User() {
  const { username } = useParams();
  const { handleLogout } = useContext(AuthContext);
  return (
    <div>
      <h2>Bienvenido {username}</h2>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
export default User;
