import { ItemCount } from "./ItemCount";

const ItemDetail = (props) => {

const {e} = props;

    return (
        <div>
            <h2>{e.marca} {e.modelo}</h2>
            <img className="small" src={e.img} alt={e.modelo}></img>
            <h4>${e.precio} USD</h4>
            <p>{e.description}</p>
            <ItemCount/>
            
        </div>
    )
}

export default ItemDetail
