import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Separator from "../../components/separator/Separator";
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <div
        style={{
          backgroundColor: "#ECF1DF",
          border: "1px solid #D4E0BA",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "2rem",
          boxShadow: "0px 0px 35px -19px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h1 className={styles.h1}>BEM-VINDO AO MAJ CÂMBIO</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 2rem 2rem 2rem",
        }}
      >
        <div style={{ width: "32rem", height: "24rem", margin: "2rem" }}>
          <img
            className={styles.imgShadow}
            style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
            src={"/assets/img/dinheiro.jpeg"}
            alt="Bem-vindo"
          />
        </div>
        <div
          style={{
            width: "50%",
            margin: "1rem 0 2rem 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: "2rem", margin: "1rem 0 0 0" }}>
              Aqui o seu dinheiro vale muito!
            </h1>
            <Separator />
            <p
              style={{
                fontSize: "1rem",
                color: "#707070",
              }}
            >
              Conectando o mundo à sua porta! Com uma abordagem inovadora e um
              serviço confiável, nós transformamos transações internacionais em
              experiências suaves e seguras.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "#707070",
              }}
            >
              Na MAJ Câmbio, não apenas trocamos moedas, construímos pontes -
              unindo você ao mundo com eficiência, transparência e taxas
              imbatíveis. Seja para negócios, viagens ou investimentos, escolha
              a MAJ Câmbio e sinta o mundo se abrir na palma da sua mão!
            </p>
          </div>
          <div>
            <h1 style={{ fontSize: "2rem", margin: "1rem 0 0 0" }}>
              Nossos parceiros
            </h1>
            <Separator />
          </div>
          <div
            style={{
              margin: "1rem 0 0 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              className={styles.bankLogo}
              src={"/assets/img/paypal-logo.png"}
              alt="Logo Paypal"
            />
            <img
              className={styles.bankLogo}
              src={"/assets/img/stripe-logo.png"}
              alt="Logo Stripe"
            />
            <img
              className={styles.bankLogo}
              src={"/assets/img/picpay-logo.png"}
              alt="Logo Picpay"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
