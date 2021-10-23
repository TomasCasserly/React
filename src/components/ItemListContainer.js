import React from 'react'
import { ItemCount } from './ItemCount'

const ItemListContainer = ({nombre, apellido, edad}) => {

    return (
        <>
            <p>Bienvenido {nombre} {apellido} de {edad} años.</p>
            <ItemCount/>
        </>
    )
}

export default ItemListContainer
