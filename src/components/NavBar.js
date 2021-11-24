import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {


  return (
    <nav>
    <NavLink to="/">
      <h2>Lotus Cars</h2>
    </NavLink>
        <li><NavLink to="/">Modelos</NavLink></li>
      <ul>
        <li><NavLink to="/modelo/Iq5OlpB72jbADspfnSUI">Elise</NavLink></li>
        <li><NavLink to="/modelo/MgdxCbQyhY0pMN9iCRuO">Exige</NavLink></li>
        <li><NavLink to="/modelo/eYYyCTlrIydA459nC6Py">Emira</NavLink></li>
        <li><NavLink to="/modelo/iVR4MK1JQ4dZnI1exjD8">Evija</NavLink></li>
      </ul>
      <CartWidget/>
    </nav>
  );
}

export default NavBar;
