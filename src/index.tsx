import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./providers/index.tsx";
import GlobalStyles from "./global-styles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
        <GlobalStyles />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
