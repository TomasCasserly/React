import { Item } from "./Item";

const ItemList = (props) => {

    // Solo el map
    const {auto} = props;
    

    return (
<div>
    {auto.map((carro)=>(
        <Item key={carro.id} carro={carro}/>
        
        ))}
</div>
    )
}

export default ItemList
