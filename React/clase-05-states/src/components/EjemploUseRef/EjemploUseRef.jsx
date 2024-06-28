import { useRef } from "react"
import { ClickButton } from "../EjemploUseState/EjemploUseState"

export const EjemploUseRef = () => {

  const title = useRef(null)

  const handleTitle = () => {
    console.dir(title.current)
    title.current.style.color = 'crimson'
  }

  return (
    <>
      <h2 ref={title}>Holi</h2>
      <ClickButton onClick={handleTitle}>Boton</ClickButton>
    </>
  )
}