import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';
// import autos from './autos';

const ItemListContainer = () => {
    // Lógica, estado, efecto,simulacro de promesa, timeout.

    const [auto, setAuto] = useState ([]);

    useEffect(() => {
    setTimeout(() => {
    setAuto([ {
        id: 1,
        marca: "Lotus",
        modelo: "Elise",
        precio: "100000",
        img: "https://2.bp.blogspot.com/-Y5oJsIA02EQ/Wm-o5Uwd9lI/AAAAAAAAWls/ANSA-6zBOLcnCUmBQUFWCIsm5HUNqZVtwCLcBGAs/s1600/Lotus-Elise-Cup-250.jpg"
    },
    {
        id: 2,
        marca: "Lotus",
        modelo: "Exige",
        precio: "200000",
        engine: "V6, 3456cc, supercharged",
        maxpower: "345bhp @ 7000rpm",
        maxtorque: "295lb @ 4500rpm",
        to100: "3.8 sec",
        topspeed: "170mph",
        description: "El Lotus Exige es un deportivo coupé de dos plazas que mide 4,08 metros de longitud y que, como todos los vehículos que fabrica la marca británica Lotus, se caracteriza por ofrecer una excelente relación entre peso y potencia para maximizar las sensaciones ofrecidas por el coche y llevar el rendimiento de éste al máximo posible.",
        img: "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Lotus_Exige_Cup_Final_Edition_03_0.jpeg?itok=ww02_Et7"
    }]);
    }, 2000);
    }, []);


    const promesa = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 2000)

    })

    promesa()
        .then(()=>{console.log("Se muestran los autos")})
        .catch(()=>{console.log("Oops")})
        

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
