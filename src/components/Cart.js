import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"
import firebase from "firebase/app"
import { firestore } from "../firebase";

const Cart = () => {

    const {cart, vaciar, remover} = useContext(contexto)
    const [id, setId] = useState()

    const [mostrar, setMostrar] = useState(false);

    const checkOut = () => {
        const cliente = {
            nombre : "Tomás Casserly",
            email : "tomas@casserly.com",
            telefono : "0800 333 0333"

        }

        const orden = {
            buyer : cliente,
            items : cart,
            total : totalPrice,
            date : firebase.firestore.Timestamp.now()
        }

        const db = firestore
        const collection = db.collection("ordenes")
        const query = collection.add(orden)

        query
        .then((resultado) =>{
            return(
            setId(resultado.id)
            )})

            setMostrar(!mostrar);

    }

    let totalPrice = 0

    cart.forEach(auto => {
        totalPrice = totalPrice + (auto.modelo.precio * auto.totalUnidades)
    })


    if (cart.length === 0) {
        return (
            <>
                <div className="garage">
                    <h2>Su garage está vacío</h2>
                    <Link to="/" exact>
                        <button>Volver</button>
                    </Link>
                </div>
            </>
        )
    } else {

    return (
        <div className="garage">
            <h1>Su Garage</h1>
            <h3>En este momento usted tiene los siguientes autos estacionados en su garage:</h3>
            {cart.map(auto=>(
                <article className="cartItem">
                    <div>
                    <h3>{auto.totalUnidades} {auto.modelo.marca} {auto.modelo.modelo}</h3>
                    <img src={auto.modelo.img} alt={auto.modelo.modelo}></img>
                    </div>
                    <div>
                    <h4>Cantidad de {auto.modelo.modelo}: {auto.totalUnidades}</h4>
                    <h4>Total: ${auto.modelo.precio * auto.totalUnidades}</h4>
                    <h4>Usted lleva un auto con las siguientes excelentes prestaciones:</h4>
                    <h5>{auto.modelo.description}</h5>
                    <button onClick={() => remover (auto.modelo) }>Remover Lotus</button>
                    </div>
                </article>
            ))}
            <button onClick={vaciar}>Vaciar el Garage</button>
            <button onClick={checkOut}>Finalizar Compra</button>
            {mostrar && <form className="formPart">
                <label>Ingrese su nombre y apellido</label>
                <input type="text"></input>
                <label>Ingrese su email</label>
                <input type="email"></input>
                <label>Ingrese un teléfono de contacto</label>
                <input type="number"></input>
                <button>Submitir</button>
                <h3>Gracias por su compra. Su total es ${totalPrice}USD y su número de orden es {id}</h3>          
                </form>}

        </div>
    )
}
}

export default Cart
