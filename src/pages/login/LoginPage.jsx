import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Separator from "../../components/separator/Separator";
import styles from "./loginpage.module.css";
import { useLogin } from "../../context/login-context";
import Footer from "../../components/footer/Footer";

export const LoginPage = () => {
  const { logado, login, logout } = useLogin();
  const [usuario, setUsuario] = useState(""); // Estado para o nome do usuário
  const [senha, setSenha] = useState(""); // Estado para a senha

  const handleLogin = (e) => {
    e.preventDefault();
    login(usuario); // Usando o nome do usuário para login
    alert("Login realizado com sucesso!");
  };

  const handleQuit = () => {
    logout();
    alert("Você saiu da sua conta.");
  };

  useEffect(() => {
    const statusLogado = localStorage.getItem("logado") === "true";
    if (statusLogado) {
      login(localStorage.getItem("usuario"));
    }
  }, [login]);

  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.h1}>ENTRAR NA SUA CONTA</h1>
      <Separator />
      {!logado ? (
        <div
          style={{
            padding: "2rem",
            backgroundColor: "#F6FAED",
            border: "1px solid #5A702A",
            margin: "0 0 12rem 0",
          }}
        >
          <form
            onSubmit={handleLogin}
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 0 1rem 0",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="usuario">Login</label>
              <input
                id="usuario"
                style={{
                  padding: "0.25rem",
                  margin: "1rem 0 1rem 0",
                  width: "100%",
                }}
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="senha">Senha</label>
              <input
                id="senha"
                style={{
                  padding: "0.25rem",
                  margin: "1rem 0 1rem 0",
                  width: "100%",
                }}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <button
              style={{
                padding: "0.5rem",
                backgroundColor: "#789C28",
                color: "white",
              }}
              type="submit"
            >
              ENTRAR
            </button>
          </form>
        </div>
      ) : (
        <>
          <p>Você já está logado.</p>
          <button
            onClick={handleQuit}
            style={{
              padding: "0.5rem",
              backgroundColor: "#789C28",
              color: "white",
              margin: "1rem 0 24rem 0",
            }}
          >
            SAIR
          </button>
        </>
      )}
      <Footer />
    </main>
  );
};

export default LoginPage;
