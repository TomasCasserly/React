import React from 'react'
import { ItemCount } from './ItemCount'

export const Item = (props) => {

    const{product} = props;

    return (
        <div>
            <img className="small" src={product.img} alt={product.modelo}></img>
            <h3>{auto.modelo} {auto.marca}</h3>
            <div>${auto.precio}</div>
            <ItemCount />
        </div>
    )
}
