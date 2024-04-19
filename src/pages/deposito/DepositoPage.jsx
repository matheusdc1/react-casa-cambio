import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Separator from "../../components/separator/Separator";
import styles from "./depositopage.module.css";
import { useSaldo } from "../../context/saldo-context";
import { useState } from "react";
import { useLogin } from "../../context/login-context";
import { Link } from "react-router-dom";

const DepositoPage = () => {
  const { logado, nomeUsuario, logout } = useLogin();

  const { saldo, setSaldo } = useSaldo();
  const [valorDeposito, setValorDeposito] = useState("");

  const handleDeposito = (e) => {
    e.preventDefault();
    const valor = parseFloat(valorDeposito);
    if (!isNaN(valor) && valor > 0) {
      // Arredondando o valor para duas casas decimais
      const valorArredondado = Math.round(valor * 100) / 100;
      setSaldo(
        (saldoAtual) => Math.round((saldoAtual + valorArredondado) * 100) / 100
      );
    }
    setValorDeposito(""); // Resetar o input após o depósito
  };

  return (
    <main>
      <section className={styles.section}>
        <Header />
        <h1 className={styles.h1}>DEPÓSITO</h1>
        <Separator />
        {logado ? (
          <div>
            <h2
              style={{
                margin: "0 2rem 1rem 2rem",
                fontSize: "1.33rem",
                textAlign: "center",
              }}
            >
              Digite o valor que deseja depositar em BRL
              <br /> (Real Brasileiro):
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <form
                style={{ display: "flex", margin: "0 0 1rem 0" }}
                onSubmit={handleDeposito}
              >
                <input
                  style={{ padding: "0.25rem" }}
                  type="text"
                  value={valorDeposito}
                  onChange={(e) => setValorDeposito(e.target.value)}
                />
                <button
                  style={{
                    padding: "0.5rem",
                    backgroundColor: "#789C28",
                    color: "white",
                  }}
                  type="submit"
                >
                  DEPOSITAR
                </button>
              </form>
              <div>
                <p style={{ margin: "0 0 0.5rem 0" }}>Saldo atual: </p>
                <h1
                  style={{
                    fontSize: "1.5rem",
                    padding: "0.5rem",
                    backgroundColor: "#789C28",
                    border: "1px solid #5A702A",
                    color: "white",
                  }}
                >
                  R${saldo.toFixed(2)}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p style={{ margin: "0 0 1rem  0" }}>
              Você precisa estar logado para depositar!
            </p>
            <Link to={"/login"}>
              <button
                style={{
                  backgroundColor: "#D4E0BA",
                  borderRadius: "8px",
                  border: "1px solid #789C28",
                }}
              >
                <li
                  style={{
                    padding: "0.5rem 0.075rem",
                    listStyle: "none",
                  }}
                >
                  LOGIN
                </li>
              </button>
            </Link>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default DepositoPage;
