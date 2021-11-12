import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'

const CartWidget = () => {

const {cart} = useContext(contexto)

    return (
        <div>
            <img id="cart" style={{height: 40, width: 60}} src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-8-580x386.jpg" alt="Logo" />
            <p>{cart.length}</p>

        </div>
    )
}

export default CartWidget