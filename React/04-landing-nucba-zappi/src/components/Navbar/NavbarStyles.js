import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100px;
  background-color: #18191a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
`;

export const LinksContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }
  a:first-child {
    background: var(--orange-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const LinkContainer = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const UserContainer = styled(LinkContainer)`
  display: flex;
  align-items: center;
`;

export const HomeContainer = styled(LinkContainer)`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserNav = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const MenuContainer = styled(LinkContainer)`
  font-size: 2rem;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`