import { Nivel3 } from "../Nivel3/Nivel3"

export const Nivel2 = ({user}) => {

  console.log("Nivel 2", {user})
  return (
    <div>
      <h2>Nivel 2</h2>
      <Nivel3 user={user}/>
    </div>
  )
}