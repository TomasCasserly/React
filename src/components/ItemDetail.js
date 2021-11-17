import { ItemCount } from "./ItemCount";
import { useContext, useState } from "react";
import { contexto } from "./CartContext";
import { useHistory } from "react-router-dom";

const ItemDetail = (mod) => {
  const { modelo } = mod;

  const { push } = useHistory();

  const { addToCart } = useContext(contexto);

  const [mostrar, setMostrar] = useState(false);

  const pasaContador = (totalUnidades) => {
    console.log(totalUnidades + " unidades " + modelo.modelo + " agregadas al carrito");
    console.log(totalUnidades, modelo);
    addToCart(totalUnidades, modelo);
    setMostrar(!mostrar);
  };

  const alCarrito = () => {
    push("/cart");
  };

  return (
    <div>
      <h2>
        {modelo.marca} {modelo.modelo}
      </h2>
      <img src={modelo.img} alt={modelo.modelo}></img>
      <h4>${modelo.precio} USD</h4>
      <p>{modelo.description}</p>
      <ItemCount onClick={pasaContador} />
      {mostrar && <button onClick={alCarrito}>Revisá tu garage</button>}
    </div>
  );
};

export default ItemDetail;
