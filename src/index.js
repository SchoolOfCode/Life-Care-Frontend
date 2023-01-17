import "@fontsource/titillium-web/400.css";
import "@fontsource/oxanium/700.css";
import "@fontsource/poppins";
import "@fontsource/open-sans";
import theme from './theme'
import React from "react";
import { App } from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
