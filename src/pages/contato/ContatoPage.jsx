import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Separator from "../../components/separator/Separator";
import styles from "./contatopage.module.css";

export const ContatoPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulário enviado!");
  };

  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.h1}>CONTATO</h1>
      <Separator />
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", padding: "2rem" }}
      >
        <div>
          <label htmlFor="nome">Nome:</label>
          <br />
          <input
            type="text"
            id="nome"
            name="nome"
            style={{ margin: "0.5rem 0", padding: "0.5rem" }}
          />
          <br />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            style={{ margin: "0.5rem 0", padding: "0.5rem" }}
          />
          <br />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <br />
          <input
            type="telefone"
            id="telefone"
            name="telefone"
            style={{ margin: "0.5rem 0", padding: "0.5rem" }}
          />
          <br />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <br />
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            style={{ margin: "0.5rem 0", padding: "0.5rem" }}
          />
          <br />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#D4E0BA",
            borderRadius: "8px",
            border: "1px solid #789C28",
            padding: "0.5rem",
            margin: "0 0 4rem 0",
            width: "100%",
          }}
        >
          ENVIAR
        </button>
      </form>
      <Footer />
    </main>
  );
};

export default ContatoPage;
