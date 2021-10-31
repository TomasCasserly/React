import React from 'react'
import { ItemCount } from './ItemCount'


export const Item = (props) => {

    const{carro} = props;

    return (
        <div>
            <img className="small" src={carro.img} alt={carro.modelo}></img>
            <h3>{carro.marca} {carro.modelo}</h3>
            <h5>${carro.precio}USD</h5>
            <ItemCount />
        </div>
    )
}
