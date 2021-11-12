import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav>
    <NavLink to="/">
      <h2>Lotus Cars</h2>
    </NavLink>
        <li><NavLink to="/modelo/">Modelos</NavLink></li>
      <ul>
        <li><NavLink to={`/modelo/elise`}>Elise</NavLink></li>
        <li><NavLink to="/modelo/exige">Exige</NavLink></li>
        <li><NavLink to="/modelo/emira">Emira</NavLink></li>
        <li><NavLink to="/modelo/evora">Evora</NavLink></li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;
