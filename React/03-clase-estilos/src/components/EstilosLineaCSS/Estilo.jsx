import "./Estilo.css";
import styles from '../EstiloModule/EstiloModule.module.css'

const parrafo = {
  fontSize: "2rem",
  color: "black",
  fontWeight: "bold",
  background: "greenyellow",
  padding: "20px",
};

// Componente
export const Estilo = () => {
  const isTrue = true;
  return (
    <div className={styles.container}>
      <h3 className={isTrue ? 'titulo' : ''}>Soy un ejemplo de estilos css</h3>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Holi</p>
      <p style={isTrue ? parrafo : {}}>Estilo en linea con objeto</p>
    </div>
  );
};
