import { Link } from "react-router-dom";
import "./header.css";
import { useLogin } from "../../context/login-context";

const Header = () => {
  const { logado, nomeUsuario, logout } = useLogin();
  const handleLogout = () => {
    logout();
  };

  return (
    <header id="header-component">
      <Link to={"/"}>
        <div className="logo-container">
          <img src="/assets/img/logo.png" alt="Logo MAJ Câmbio" />
          <h1>MAJ CÂMBIO</h1>
        </div>
      </Link>
      <nav>
        <ul>
          <Link to={"/deposito"}>
            <li>DEPÓSITO</li>
          </Link>
          <Link to={"/cambio"}>
            <li>CÂMBIO</li>
          </Link>
          <Link to={"/sobre"}>
            <li>SOBRE</li>
          </Link>
          <Link to={"/contato"}>
            <li>CONTATO</li>
          </Link>
          {logado && <li>Bem-vindo, {nomeUsuario.toUpperCase()}</li>}
          {logado ? (
            <Link to={"/"}>
              <div
                onClick={handleLogout}
                style={{
                  backgroundColor: "#F5B2B2",
                  borderRadius: "8px",
                  border: "1px solid #702A2A",
                }}
              >
                <li style={{ padding: "0.5rem 0.075rem" }}>SAIR</li>
              </div>
            </Link>
          ) : (
            <Link to={"/login"}>
              <div
                style={{
                  backgroundColor: "#D4E0BA",
                  borderRadius: "8px",
                  border: "1px solid #789C28",
                }}
              >
                <li style={{ padding: "0.5rem 0.075rem" }}>LOGIN</li>
              </div>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
