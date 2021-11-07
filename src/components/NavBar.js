import { useContext } from "react";
import { contexto } from "./CartContext";
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {
  const resultado = useContext(contexto);
  console.log(resultado);

  return (
    <nav>
    <NavLink to="/">
      <h2>Lotus Cars</h2>
    </NavLink>
      <ul>
        <li><NavLink to="/modelo/elise">Elise</NavLink></li>
        <li><NavLink to="/modelo/exige">Exige</NavLink></li>
        <li><NavLink to="/modelo/emira">Emira</NavLink></li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;
