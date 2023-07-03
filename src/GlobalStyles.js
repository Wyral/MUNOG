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

  main {
    padding-top: 100px;
    padding-left: 20px;
    padding-right: 20px;
    overflow: hidden;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  strong {
    font-weight: 600;
  }

  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
  }
  .embla__slide {
    flex: 0 0 25%;
    min-width: 200px;
  }
`