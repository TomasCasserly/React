import React from 'react'

const ItemListContainer = ({nombre, apellido, edad}) => {

    const boton = () => {
    console.log("Listo capo")

}

    return (
        <>
            <p>Bienvenido {nombre} {apellido} de {edad} años.</p>
            <button onClick={boton}>Soy un botón</button>
        </>
    )
}

export default ItemListContainer
