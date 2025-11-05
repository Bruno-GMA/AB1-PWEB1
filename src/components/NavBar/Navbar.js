import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="Logo">Reserv.ai</h2>
      </Link>


      <div className="Links">
        <NavLink
          to="/"
          className="elemento"
        >
          Início
        </NavLink>
        <NavLink
          to="/sobre"
          className="elemento"
        >
          Sobre
        </NavLink>

        <NavLink
          to="/servicos"
          className="elemento"
        >
          Serviços
        </NavLink>
      </div>


      <button>Entrar</button>
    </nav>
  );
}
