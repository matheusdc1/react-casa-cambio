import { useEffect, useState } from "react";
import { buscarCotacaoDolarReal } from "../../api/cotacao-dolar-real";
import { buscarCotacaoPesoArgentinoReal } from "../../api/cotacao-peso-argentino-real";
import { buscarCotacaoEuroReal } from "../../api/cotacao-euro-real";
import Header from "../../components/header/Header";
import Separator from "../../components/separator/Separator";
import styles from "./cambiopage.module.css";
import { useSaldo } from "../../context/saldo-context";
import Footer from "../../components/footer/Footer";
import { useLogin } from "../../context/login-context";
import { Link } from "react-router-dom";

export const CambioPage = () => {
  const { saldo, setSaldo } = useSaldo();
  const { logado } = useLogin();
  const [cotacaoDolarReal, setCotacaoDolarReal] = useState(null);
  const [cotacaoEuroReal, setCotacaoEuroReal] = useState(null);
  const [cotacaoPesoArgentinoReal, setCotacaoPesoArgentinoReal] =
    useState(null);
  const [moeda, setMoeda] = useState("USD");
  const [quantidade, setQuantidade] = useState("");
  const [portfolio, setPortfolio] = useState(() => {
    const portfolioSalvo = localStorage.getItem("portfolio");
    return portfolioSalvo
      ? JSON.parse(portfolioSalvo)
      : { USD: 0, EUR: 0, ARS: 0 };
  });

  useEffect(() => {
    // OBTER COTACAO DOLAR REAL
    const obterCotacaoDolarReal = async () => {
      const cotacao = await buscarCotacaoDolarReal();
      setCotacaoDolarReal(cotacao);
    };

    // OBTER COTACAO EURO REAL
    const obterCotacaoEuroReal = async () => {
      const cotacao = await buscarCotacaoEuroReal();
      setCotacaoEuroReal(cotacao);
    };

    // OBTER COTACAO PESO ARGENTINO REAL
    const obterCotacaoPesoArgentinoReal = async () => {
      const cotacao = await buscarCotacaoPesoArgentinoReal();
      setCotacaoPesoArgentinoReal(cotacao);
    };

    obterCotacaoDolarReal();
    obterCotacaoEuroReal();
    obterCotacaoPesoArgentinoReal();
  }, []);

  useEffect(() => {
    // Salvar o portfólio no localStorage toda vez que ele mudar
    localStorage.setItem("portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  const handleTroca = (e) => {
    e.preventDefault();
    let valorCambio = 0;
    switch (moeda) {
      case "USD":
        valorCambio = quantidade * cotacaoDolarReal;
        break;
      case "EUR":
        valorCambio = quantidade * cotacaoEuroReal;
        break;
      case "ARS":
        valorCambio = quantidade * cotacaoPesoArgentinoReal;
        break;
      default:
        alert("Moeda inválida");
        return;
    }

    if (valorCambio > saldo) {
      alert("Saldo insuficiente para a troca.");
      return;
    }

    setSaldo((saldoAtual) => saldoAtual - valorCambio);
    setPortfolio((portfolioAtual) => {
      const quantidadeNova =
        parseFloat(portfolioAtual[moeda]) + parseFloat(quantidade);
      return { ...portfolioAtual, [moeda]: quantidadeNova };
    });
    alert(`Você trocou R$${valorCambio.toFixed(2)} por ${quantidade} ${moeda}`);
  };

  const getCotacaoAtual = () => {
    switch (moeda) {
      case "USD":
        return cotacaoDolarReal;
      case "EUR":
        return cotacaoEuroReal;
      case "ARS":
        return cotacaoPesoArgentinoReal;
      default:
        return null;
    }
  };

  const calcularValorEmReal = () => {
    const cotacao = getCotacaoAtual();
    return cotacao ? (quantidade * cotacao).toFixed(2) : "0.00";
  };

  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.h1}>CÂMBIO</h1>
      <Separator />
      {logado ? (
        <section
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <div>
            <p style={{ margin: "0 0 0.5rem 0" }}>
              Saldo atual em BRL (Real Brasileiro):
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                padding: "0.5rem",
                backgroundColor: "#789C28",
                border: "1px solid #5A702A",
                color: "white",
                margin: "0 0 2rem 0",
              }}
            >
              R${saldo.toFixed(2)}
            </p>
            <p style={{ fontSize: "1.5rem" }}>Trocar moedas</p>
            <Separator />
            <form onSubmit={handleTroca}>
              <div style={{ margin: "0 0 1rem 0" }}>
                <label>Moeda para troca: </label>
                <select
                  value={moeda}
                  onChange={(e) => setMoeda(e.target.value)}
                >
                  <option value="USD">Dólar (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                  <option value="ARS">Peso Argentino (ARS)</option>
                </select>
              </div>
              <div>
                <div style={{ margin: "0 0 1rem 0" }}>
                  <label>Valor em moeda estrangeira: </label>
                  <input
                    type="number"
                    value={quantidade}
                    onChange={(e) => setQuantidade(e.target.value)}
                    min="0"
                  />
                </div>
                <p style={{ margin: "0 0 2rem 0" }}>
                  Valor em BRL:{" "}
                  <span
                    style={{
                      fontSize: "1.5rem",
                      margin: "0 0 2rem 0",
                    }}
                  >
                    R$ {calcularValorEmReal()}
                  </span>
                </p>
              </div>
              <button
                type="submit"
                style={{
                  padding: "0.5rem",
                  backgroundColor: "#789C28",
                  color: "white",
                  margin: "0 0 12rem 0",
                  width: "100%",
                }}
              >
                Trocar
              </button>
            </form>
          </div>
          <div
            style={{
              width: "2px",
              height: "16rem",
              backgroundColor: "#E0E9CD",
              margin: "4rem",
            }}
          ></div>
          <div>
            <p style={{ fontSize: "1.5rem" }}>Portfólio</p>
            <Separator />
            <p style={{ margin: "0 0 1rem 0" }}>
              <img
                style={{ width: "1.5rem", margin: "0 0.25rem 0 0" }}
                src="assets/img/eua.png"
              />
              Dólar (USD): {portfolio.USD.toFixed(2)}
            </p>
            <p style={{ margin: "0 0 1rem 0" }}>
              <img
                style={{ width: "1.5rem", margin: "0 0.25rem 0 0" }}
                src="assets/img/euro.png"
              />
              Euro (EUR): {portfolio.EUR.toFixed(2)}
            </p>
            <p style={{ margin: "0 0 1rem 0" }}>
              <img
                style={{ width: "1.5rem", margin: "0 0.25rem 0 0" }}
                src="assets/img/argentina.png"
              />
              Peso Argentino (ARS): {portfolio.ARS.toFixed(2)}
            </p>
          </div>
        </section>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: "0 0 26rem 0",
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

      <Footer />
    </main>
  );
};

export default CambioPage;
