export const Nivel3 = ({ user }) => {
  console.log("Nivel 3", { user });
  return (
    <div>
      <h2>Nivel 3</h2>
      <p>User: {user.name}</p>
      {user.isLogged && <p>Esta logueado</p> }
    </div>
  );
};
