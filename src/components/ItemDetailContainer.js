import { useEffect, useState } from "react"
import autos from "./autos"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

const {data} = autos;

const [auto, setAuto] = useState([]);

useEffect (() => {
    setTimeout (() =>{
        setAuto([autos]);
    }, 2000);
},[]);

{auto.map ((e) => {
    return <p key={e.id}> {e.description}</p>
})}


    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer
