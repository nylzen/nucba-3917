import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  return (
    <div>
      <h2>Bienvenido {username}</h2>
    </div>
  );
}
export default User;
