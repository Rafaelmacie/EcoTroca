import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoeco.png";
import { AuthContext } from "../../context/authHandler";
import { useContext } from "react";

function Header() {
  const { handleLogout } = useContext(AuthContext);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className={`navbar-brand ${styles.decoration}`} to="/">
          <img src={Logo} alt="Logo EcoTroca" width={80} />
          <span>EcoTroca</span>
        </Link>

        {/* Botão sanduíche */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarEco"
          aria-controls="navbarEco"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu colapsável */}
        <div className="collapse navbar-collapse" id="navbarEco">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`btn btn-outline-success m-1 ${styles.categories}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/todosprodutos" className={`btn btn-outline-success m-1 ${styles.categories}`}>Todos Produtos</Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className={`btn btn-outline-success m-1 ${styles.categories}`}>Perfil</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`btn btn-outline-success m-1 ${styles.categories}`}>Sobre</Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <span onClick={handleLogout} className={`btn btn-outline-success m-1 ${styles.loginButton}`}>Sair</span>
              ) : (
                <Link to="/login" className={`btn btn-outline-success m-1 ${styles.loginButton}`}>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
