import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { contexto } from "./CartContext";

const ItemDetail = (mod) => {

    const {addToCart} = useContext(contexto)

    const pasaContador = (totalUnidades) => {
        console.log(totalUnidades+ " unidades " + modelo.modelo + " agregadas al carrito")
        console.log(totalUnidades, modelo)
        addToCart(totalUnidades, modelo)
    }

    const {modelo} = mod;

    return (
        <div>
            <h2>{modelo.marca} {modelo.modelo}</h2>
            <img src={modelo.img} alt={modelo.modelo}></img>
            <h4>${modelo.precio} USD</h4>
            <p>{modelo.description}</p>
            <ItemCount onClick={pasaContador}/>
            
        </div>
    )
}

export default ItemDetail
