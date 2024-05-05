import "./styles.css";
import logoImg from "../../../public/assets/logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation();

  const isActive = (path:string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="rda-header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logoImg} alt="logo" />
          </Link>
        </div>
        <nav className="navigation">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            VOLTAR A HOME
          </Link>
          <Link
            to="/registration"
            className={`nav-link ${isActive("/registration") ? "active" : ""}`}
          >
            MEU CADASTRO
          </Link>
          <Link
            to="/mycart"
            className={`nav-link ${isActive("/mycart") ? "active" : ""}`}
          >
            MEU CARRINHO
          </Link>
        </nav>
      </div>
    </header>
  );
}
