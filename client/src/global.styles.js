import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 0.5rem 4rem;

        @media screen and (max-width: 800px) {
            padding: 10px;
            
        } 
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 1.5rem;
        font-weight: bold;
    }

    * {
        box-sizing: border-box;
    }
`