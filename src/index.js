import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0; 
    font-family: 'Poppins', sans-serif;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
