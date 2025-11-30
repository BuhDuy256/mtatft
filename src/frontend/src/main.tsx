import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MetadataProvider } from "./contexts/MetadataContext.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MetadataProvider>
        <App />
      </MetadataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
