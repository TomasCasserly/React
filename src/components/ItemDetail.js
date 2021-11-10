import { ItemCount } from "./ItemCount";

const ItemDetail = (props) => {

    const pasaContador = (totalUnidades) => {
        console.log(totalUnidades+ " unidades agregadas al carrito")

    }

const {e} = props;

    return (
        <div>
            <p>HOLAHOLA</p>
            <h2>{e.marca} {e.modelo}</h2>
            <img src={e.img} alt={e.modelo}></img>
            <h4>${e.precio} USD</h4>
            <p>{e.description}</p>
            <ItemCount onClick={pasaContador}/>
            
        </div>
    )
}

export default ItemDetail
