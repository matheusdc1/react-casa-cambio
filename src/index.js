import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./css/reset.css";
import "./css/font.css";
import "./css/index.css";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router/router";
import { SaldoProvider } from "./context/saldo-context";
import { LoginProvider } from "./context/login-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LoginProvider>
      <SaldoProvider>
        <RouterProvider router={router} />
      </SaldoProvider>
    </LoginProvider>
  </React.StrictMode>
);

reportWebVitals();
