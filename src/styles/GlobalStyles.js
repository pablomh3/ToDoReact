import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
html{
    scroll-behavior: smooth;
  }
    body {
    margin: 0;
    padding: 0;
    background: #131415;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }
    a {
    text-decoration: none;
    color: white;
    }
    a:visited {
    color: white;
    }
    li {
    list-style: none;
    }
`;



