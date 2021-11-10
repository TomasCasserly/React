import { useContext } from "react";
import { contexto } from "./CartContext";
import CartWidget from "./CartWidget"
import { NavLink, useParams } from "react-router-dom";

function NavBar() {
  const resultado = useContext(contexto);
  console.log(resultado);

  const {id} = useParams();

  return (
    <nav>
    <NavLink to="/">
      <h2>Lotus Cars</h2>
    </NavLink>
        <li><NavLink to="/modelo/">Modelos</NavLink></li>
      <ul>
        <li><NavLink to={`/modelo/${id}`}>Elise</NavLink></li>
        <li><NavLink to="/modelo/exige">Exige</NavLink></li>
        <li><NavLink to="/modelo/emira">Emira</NavLink></li>
        <li><NavLink to="/modelo/evora">Evora</NavLink></li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;
