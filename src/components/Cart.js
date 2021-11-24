import { useContext, useState } from "react"
import { contexto } from "./CartContext"
import { Link } from "react-router-dom"
import firebase from "firebase/app"
import { firestore } from "../firebase";

const Cart = () => {

    const {cart} = useContext(contexto)
    const [id, setId] = useState()

    const checkOut = () => {
        const cliente = {
            nombre : "Pepe",
            email : "pepe@pepe.com",
            telefono : "0800 333 0333"

        }

        console.log(cliente,cart)

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

    }

    let totalPrice = 0

    cart.forEach(auto => {
        totalPrice = totalPrice + (auto.modelo.precio * auto.modelo.totalUnidades)
    })


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
            <button onClick={checkOut}>Finalizar Compra</button>
            <p>Gracias por su compra. Su número de orden es {id}</p>
        </div>
    )
}
}

export default Cart
