import { createContext, useState } from "react";

export const contexto = createContext();

const { Provider } = contexto;

const ContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (totalUnidades, modelo) => {
    const newCar = { totalUnidades, modelo };
    const copia = [...cart];
    copia.push(newCar);
    setCart(copia);
  };

  const vaciar = () => {
    setCart([]);
  };

  const remover = (modelo) => {
    setCart(cart.filter((auto) => auto.modelo !== modelo));
  };

  const totalCantidad = () => {
    return cart.reduce((car, that) => car + that.totalUnidades, 0);
  };

  const contextValue = {
    cart: cart,
    addToCart: addToCart,
    remover: remover,
    vaciar: vaciar,
    totalCantidad: totalCantidad,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default ContextComponent;
