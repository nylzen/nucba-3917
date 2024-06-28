import { useContext } from "react";
import { Contexto } from "../../context/MiContexto";
import styled from "styled-components";


const Navbar = styled.nav`

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Layout = ({ children }) => {

  const {count} = useContext(Contexto)

  return (
    <>
      <Navbar>
        <h2>Logo</h2>
        <span>{count}</span>
      </Navbar>
      <main>{children}</main>
      <footer>
        {/* <p style={{color: color}}>Holis</p> */}
        <p>Holi</p>
      </footer>
    </>
  );
};
