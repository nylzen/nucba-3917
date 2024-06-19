import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutWrapper>{children}</LayoutWrapper>
      <Footer />
    </>
  );
};
