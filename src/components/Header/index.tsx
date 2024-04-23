import "./styles.css";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="rda-header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logoImg} alt="logo" />
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/" className="nav-link">
            VOLTAR A HOME
          </Link>
          <Link to="/register" className="nav-link">
            MEU CADASTRO
          </Link>
          <Link to="/cart" className="nav-link">
            MEU CARRINHO
          </Link>
        </nav>
      </div>
    </header>
  );
}
