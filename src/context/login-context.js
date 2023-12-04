import React, { createContext, useState, useContext } from "react";

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [logado, setLogado] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const login = (usuario) => {
    setNomeUsuario(usuario);
    setLogado(true);
    localStorage.setItem("logado", "true");
    localStorage.setItem("usuario", usuario);
  };

  const logout = () => {
    setLogado(false);
    setNomeUsuario("");
    localStorage.removeItem("logado");
    localStorage.removeItem("usuario");
  };

  return (
    <LoginContext.Provider value={{ logado, nomeUsuario, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
