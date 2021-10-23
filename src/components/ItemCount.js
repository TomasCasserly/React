import {useState, React} from 'react'

export const ItemCount = () => {

    const [count, setCount] = useState(0);

    const add = () => {
        if (count >=5){
            return;
        } else{
        setCount(count + 1)
    }

    }
    const res = () => {
        if (count <=0){
            return;
        } else {
        setCount(count - 1)
    }
    }

    const agregar = () => {
        console.log("Producto agregado al carrito")
    }

    return (
        <>
        <div className="contador">
            <button onClick={add} >+</button>
            <p className="cont">{count}</p>
            <button onClick={res}>-</button>
        </div>
        <button className="agreg" onClick={agregar}>Agregar al carrito</button>
        </>
    )
}
