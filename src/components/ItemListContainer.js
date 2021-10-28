import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
    // Lógica, estado, efecto,simulacro de promesa, timeout.

    const [autos, setAutos] = useState ([]);

    useEffect(() => {
    setTimeout(() => {
    setAutos([
        {"id": 1,
        "marca": "Lotus",
        "modelo": "Elise",
        "precio": 250000,
        "img": "http://placehold.it/100x100"
    },
    {
        "id": 2,
        "marca": "Lotus",
        "modelo": "Exige",
        "precio": 250000,
        "img": "http://placehold.it/100x100"
    },
    {
        "id": 3,
        "marca": "Lotus",
        "modelo": "Emira",
        "precio": 250000,
        "img": "http://placehold.it/100x100"
    }
]);
    }, 2000);
    }, []);


    const promesa = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(autos)
        }, 2000)

    })

    promesa()
        .then(()=>{console.log("Se muestran los autos")})
        .catch(()=>{console.log("Oops")})
        

        if (autos.length === 0) {
            return <p>Loading</p>;
        } else {

    return (
        <>
              <ItemList/>
        </>
    )
}
}

export default ItemListContainer
