// import styled from "styled-components";

// const Card = styled.article`
//   background-color: #f1f1f1;
//   border-radius: 10px;
//   padding: 20px;
//   width: 300px;
//   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// import { Card, CardImage, CardTitle } from "./EstiloStyled.styles";
import { Button, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import * as style from "./EstiloStyled.styles.js";
import { useState } from "react";

export const EstiloStyled = ({ textColor }) => {
  const actions = [
  { icon:'', name: 'Copy' },
  { icon: '', name: 'Save' },
  { icon: '', name: 'Print' },
  { icon: '', name: 'Share' },
];


  const handleClick = () => {
    alert("Comprado");
  }
  return (
    <style.Card>
      <style.CardImage
        src="https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583"
        alt="Messi"
      />
      <style.CardTitle color={textColor}>Messi</style.CardTitle>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
        corporis!
      </p>

      <div>
        <h3>
          Forca <span>Barca</span>
        </h3>
      </div>
      {/* <style.PrimaryButton>Comprar ahora</style.PrimaryButton> */}
      <Button variant="contained" color="success" onClick={handleClick}>
        Comprar
      </Button>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </style.Card>
  );
};
