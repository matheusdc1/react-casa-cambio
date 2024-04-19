import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Separator from "../../components/separator/Separator";
import styles from "./sobrepage.module.css";

export const SobrePage = () => {
  return (
    <main className={styles.main}>
      <Header />
      <h1 className={styles.h1}>SOBRE</h1>
      <Separator />
      <article
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 2rem 4rem 2rem",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 2rem",
            width: "50%",
          }}
        >
          <SobreCard
            src={"/assets/img/experiencia.svg"}
            title={"EXPERIÊNCIA"}
            description={
              "Com anos de experiência no setor financeiro, a MAJ Cambio se estabeleceu como uma referência no mercado de câmbio. Nossa equipe de profissionais altamente qualificados está sempre pronta para oferecer orientação personalizada, garantindo que você faça as melhores escolhas para suas necessidades de câmbio."
            }
          />
          <SobreCard
            src={"/assets/img/compromisso.svg"}
            title={"COMPROMISSO"}
            description={
              "A satisfação do cliente é o coração da nossa empresa. Nos esforçamos para construir relacionamentos de longo prazo com nossos clientes, oferecendo um serviço personalizado e atenção aos detalhes. Sua confiança é o nosso maior ativo, e trabalhamos incansavelmente para mantê-la."
            }
          />
          <SobreCard
            src={"/assets/img/seguranca.svg"}
            title={"SEGURANÇA"}
            description={
              "Na MAJ Cambio, a segurança dos seus recursos é nossa prioridade máxima. Utilizamos as mais modernas tecnologias de segurança para garantir que todas as transações sejam realizadas com a máxima proteção. Além disso, estamos em conformidade com todas as regulamentações financeiras, proporcionando tranquilidade aos nossos clientes."
            }
          />
          <SobreCard
            src={"/assets/img/inovacao.svg"}
            title={"INOVAÇÃO"}
            description={
              "Estamos constantemente buscando inovar e melhorar nossos serviços. Mantemos um olhar atento às tendências do mercado e às necessidades em evolução dos nossos clientes, para que possamos continuar a oferecer as melhores soluções de câmbio disponíveis."
            }
          />
        </div>
      </article>
      <Footer />
    </main>
  );
};

const SobreCard = ({ src, title, description }) => {
  return (
    <div
      style={{
        margin: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          background: "rgb(245,245,245)",
          background:
            "linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(120,156,40,1) 100%)",
          borderRadius: "100%",
          border: "2px solid #789c28",
          margin: "2rem 0 1rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={src} />
      </div>
      <h2
        style={{
          color: "#789c28",
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        {title}
      </h2>
      <p
        style={{ color: "#505050", textAlign: "center", margin: "1rem 0 0 0" }}
      >
        {description}
      </p>
    </div>
  );
};

export default SobrePage;
