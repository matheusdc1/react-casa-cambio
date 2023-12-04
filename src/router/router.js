import DepositoPage from "../pages/deposito/DepositoPage";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import CambioPage from "../pages/cambio/CambioPage";
import SobrePage from "../pages/sobre/SobrePage";
import ContatoPage from "../pages/contato/ContatoPage";
import LoginPage from "../pages/login/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/deposito",
    element: <DepositoPage />,
  },
  {
    path: "/cambio",
    element: <CambioPage />,
  },
  {
    path: "/sobre",
    element: <SobrePage />,
  },
  {
    path: "/contato",
    element: <ContatoPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
