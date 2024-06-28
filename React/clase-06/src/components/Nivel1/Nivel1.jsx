import { Nivel2 } from "../Nivel2/Nivel2";

export const Nivel1 = ({ user }) => {
  console.log('Nivel1',{user})
  return (
    <div>
      <h2>Nivel 1</h2>
      <Nivel2 user={user} />
    </div>
  );
};
