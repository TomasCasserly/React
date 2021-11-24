import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { firestore } from '../firebase';
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [auto, setAuto] = useState([])
    const {id} = useParams()

    useEffect(()=>{

        const db = firestore

        const collection = db.collection("autos")

        // const query = collection.where("idCategoria", "==", {id})
        // const consulta = query.get()



        const consulta = collection.get()

        consulta
        .then(resultado =>{

            const coches = []

            resultado.docs.forEach(doc=>{
                const coche = {...doc.data()}
                coche.id = doc.id
                coches.push(coche)
            })

            setAuto(coches)
        })

        .catch(()=>{
            console.log("Hubo un error")
        })
    })
    

    return (
        <div>
            <ItemList auto={auto}/>
        </div>
    )
}

export default ItemListContainer



// import React, {useEffect, useState} from 'react'
// import {useParams} from 'react-router-dom'
// import ItemList from './ItemList';
// import { firestore } from '../firebase';

// const ItemListContainer = () => {
//     // Lógica, estado, efecto,simulacro de promesa, timeout.

//     const [auto, setAuto] = useState ([]);
//     const {id} = useParams()

//     useEffect(() => {

//         const db = firestore

//         const collection = db.collection("autos")

//         let query = query.where("precio",">",200000)

//         const consulta = query.get()

//         consulta
//         .then(resultado => {
//             setAuto(resultado.doc.map(doc=>({...doc.data(),id:doc.id})))
//         })

//         .catch(error=> {
//             console.log(error)
//         })
//     //     setTimeout(()=> {
//     //     const fetchModelo=async()=>{
//     //         const response=await Axios(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`);
//     //         setAuto(response.data)
//     //     }
//     //     fetchModelo();
//     // }, 2000)
//     })

//         if (auto.length === 0) {
//             return <p>Aguarde un momento, por favor</p>;
//         } else {

//     return (
//         <>
//               <ItemList auto={auto}/>
//         </>
//     )
// }
// }

// export default ItemListContainer
