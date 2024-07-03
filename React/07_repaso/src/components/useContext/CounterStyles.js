import styled, { css } from "styled-components";
import { AiOutlineMinusCircle } from "react-icons/ai";

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: calc(100vh - 30px);
`;

export const CounterButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 3px;
    font-size: 20px;
    color: white;
  }
`;

export const CounterSpan = styled.span`
  padding: 10px;
  width: 100px;
  font-size: 30px;
  text-align: center;
  color: white;
`;

export const CounterButton = styled.button`
  padding: 10px 30px;
  background: linear-gradient(
    134.59deg,
    rgba(255, 255, 255, 0.05) 7.23%,
    rgba(255, 255, 255, 0.25) 100%
  );
  border: 3px solid white;

  /* background: ${(props) => (props.red ? "red" : "blue")} */

  ${(props) =>
    props.left &&
    css`
      border-top-left-radius: 9px;
      border-bottom-left-radius: 9px;
    `}

    ${(props) =>
    props.right && css`
      border-top-right-radius: 9px;
      border-bottom-right-radius: 9px;
    `}

  cursor:pointer;
`;

export const IconStyled = styled(AiOutlineMinusCircle)`
  background: red;
`;
