import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
    body {
        margin: 0;
        user-select: none;
        background-color: #EFEFF2;
        background: #000;
        font-family: 'Poppins', sans-serif;
        -webkit-tap-highlight-color: transparent; 
        padding: 10px;
        display:flex;
        justify-content: center;
    }
`;

export default GlobalStyles;
