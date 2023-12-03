import { Link, NavLink } from "react-router-dom";
import "./style.scss";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => `${isActive ? "linkActive" : "link"}`}
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "linkActive" : "link"}`}
        to="/societe"
      >
        La Société
      </NavLink>
      <NavLink
        className={({ isActive }) => `${isActive ? "linkActive" : "link"}`}
        to="/solution"
      >
        Notre solution
      </NavLink>

      <NavLink
        className={({ isActive }) => `${isActive ? "linkActive" : "link"}`}
        to="/contact"
      >
        Contactez-nous
      </NavLink>
    </nav>
  );
}
