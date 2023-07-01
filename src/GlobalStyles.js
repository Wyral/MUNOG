import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(7 10 15);
  }

  * {
    font-family: "Nunito", sans-serif;
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    color: rgb(255, 255, 255);
  }

  body::-webkit-scrollbar {
    display: none;
  }

  strong {
    font-weight: 600;
  }
`