import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
import Axios from 'axios';
// import autos from './autos';

const ItemListContainer = () => {
    // Lógica, estado, efecto,simulacro de promesa, timeout.

    const [auto, setAuto] = useState ([]);

    useEffect(() => {
        setTimeout(()=> {
        const fetchModelo=async()=>{
            const response=await Axios(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`);
            setAuto(response.data)
        }
        fetchModelo();
    }, 2000)
    },[])


    // const promesa = () =>
    // new Promise((res, rej) => {
    //     setTimeout(() => {
    //         res()
    //     }, 2000)

    // })

    // promesa()
    //     .then(()=>{console.log("Se muestran los autos")})
    //     .catch(()=>{console.log("Oops")})
        

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
