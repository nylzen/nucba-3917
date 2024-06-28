import { ClickButton } from "../EjemploUseState/EjemploUseState";

export const EjemploOnSubmit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <ClickButton>Enviar</ClickButton>
    </form>
  );
};
