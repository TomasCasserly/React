import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import { firestore } from '../firebase';

const ItemListContainer = () => {
    // Lógica, estado, efecto,simulacro de promesa, timeout.

    const [auto, setAuto] = useState ([]);

    useEffect(() => {

        const db = firestore

        const collection = db.collection("autos")

        const query = collection.doc("Iq5OlpB72jbADspfnSUI")
        console.log(query)
    //     setTimeout(()=> {
    //     const fetchModelo=async()=>{
    //         const response=await Axios(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`);
    //         setAuto(response.data)
    //     }
    //     fetchModelo();
    // }, 2000)
    },[])

        if (auto.length === 0) {
            return <p>Aguarde un momento, por favor</p>;
        } else {

    return (
        <>
              <ItemList auto={auto}/>
        </>
    )
}
}

export default ItemListContainer
