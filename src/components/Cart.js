import { useContext } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart} = useContext(contexto)


    if (cart.length === 0) {
        return (
            <>
                <div>
                    <h2>Su garage está vacío</h2>
                    <Link to="/" exact>
                        <button>Volver</button>
                    </Link>
                </div>
            </>
        )
    } else {

    return (
        <div>
            <h3>Su Garage</h3>
            <h4>En este momento usted tiene los siguientes autos estacionados en su garage:</h4>
            {cart.map(auto=>(
                <article>
                    <h3>{auto.totalUnidades} {auto.modelo.marca} {auto.modelo.modelo}</h3>
                    <img src={auto.modelo.img} alt={auto.modelo.modelo}></img>
                    <p>Total : ${auto.modelo.precio * auto.totalUnidades} (Cant : {auto.totalUnidades})</p>
                    <button>Remover Lotus</button>
                </article>
            ))}      
        </div>
    )
}
}

export default Cart
