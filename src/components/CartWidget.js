import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {

const {cart} = useContext(contexto)

    return (
        <div>
            <NavLink to={`/cart`}>
            <img id="cart" style={{height: 40, width: 60}} src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-8-580x386.jpg" alt="Logo" /></NavLink>
            <p>{cart.length.totalUnidades}</p>
            {cart.map(auto=>(
                <div>
                    <p>{auto.totalUnidades} {auto.modelo.modelo}</p>
                </div>
            ))}

        </div>
    )
}

export default CartWidget