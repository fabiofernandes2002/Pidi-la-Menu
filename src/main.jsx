import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme"
import App from "./App";
import "./index.css"; // Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme = {theme}>
    <App />
  </ChakraProvider>
);
