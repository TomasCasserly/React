import { createContext, useState } from "react";

export const contexto = createContext()

const { Provider } = contexto

const ContextComponent = ({children}) => {

    const [cart, setCart] = useState ([])

    const addToCart = (totalUnidades, modelo) => {
        console.log("Al context")
        console.log(totalUnidades, modelo)
        const newCar = {totalUnidades, modelo}
        const copia = [...cart]
        copia.push(newCar)
        setCart(copia)

    }

    const vaciar = () => {
        setCart([])
    }

    const remover = (modelo) => {
        

    }

    const contextValue = {
        cart : cart,
        addToCart : addToCart,
        remover : remover,
        vaciar : vaciar
    }


    return (

        <Provider value={contextValue}>
            {children}

        </Provider>
    )
}

export default ContextComponent