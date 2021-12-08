import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <nav>
    <NavLink to="/">
      <h1>Lotus Cars</h1>
    </NavLink>
    <ul>
      <li><NavLink exact to="/category/nafta">Nafta</NavLink></li>
      <li><NavLink exact to="/category/electrico">Eléctrico</NavLink></li>
    </ul>

      <CartWidget/>
    </nav>
  );
}

export default NavBar;
