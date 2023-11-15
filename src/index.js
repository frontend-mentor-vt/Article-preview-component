import ReactDOM from "react-dom/client";
import App from "./App";
import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
    background-color: hsl(210, 46%, 95%);
  };
  p,h1,div{
    margin: 0;
  };

`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <GlobalStyles />
    <App />
  </Fragment>
);
