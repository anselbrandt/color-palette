import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const theme = extendTheme({
  colors: colors,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
