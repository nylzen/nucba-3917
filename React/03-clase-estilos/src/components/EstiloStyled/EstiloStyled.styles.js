import styled from "styled-components";

export const Card = styled.article`
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  & p {
    text-align: left;
  }

  & div {
    h3 {
      color: red;

      span {
        color: blue;
      }
    }
  }
`;

export const CardTitle = styled.h2`
  color: ${props => props.color ? props.color : 'red'};
  font-size: 24px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 10px;
`;

export const PrimaryButton = styled(Button)`
  background-color: blue;
  border-radius: 10px;
`

// export { Card, CardTitle, CardImage };
