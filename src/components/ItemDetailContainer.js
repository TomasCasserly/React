import ItemDetail from "./ItemDetail";
import autos from "./autos.json";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [modelo,setModelo]=useState([])
    
    const {id} = useParams();
    console.log(id)


    const results = autos.filter(modelo => modelo.id === id);

        useEffect(()=>{

            const getItem = () => {
                return new Promise((resolve) => {
                    setTimeout(()=>{
                        resolve(results)
                    },2000);
                });
            }
            getItem()
            .then(data => setModelo(data))
        }, [results]);


    return (
        <section>
            <h2>LOTUSLOTUS</h2>
            <div>
                {/* {modelo.map(e =>  */}
                        <ItemDetail key={modelo.id} e={modelo}/>)
                        {/* } */}
            </div>
        </section>
    )
}

export default ItemDetailContainer;












// import React, { useEffect, useState } from 'react';
// import GetItems from './GetItems';
// import ItemDetail from './ItemDetail'
// import { useParams } from 'react-router-dom';

// function ItemDetailContainer(){

// const {id} = useParams()

// const [modelo, setModelo] = useState([])

// useEffect(() => {
//   GetItems.then((data) => {
//     const found = data.find(e => e.id === parseInt(id))
//     setModelo(found)
//   })
// })

// return (
//   <>
//       <ItemDetail e={modelo} />
//   </>
// )


// // const [modelo, setModelo] = useState([]);

// //   const {id} = useParams()
// //   console.log({id})

// //   useEffect(() => {
// //     GetItems.then((modo) =>{
// //       const selectedModeloById = modo.filter( modelo => modelo.id === id )
// //       setModelo(selectedModeloById)
// //     })
// //   })



// // const [modelo, setModelo] = useState([]);
// // useEffect(()=>{
// //   const obtenerDatos = async () => {
// //     const data = await fetch(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`)
// //     const modo = await data.json()
// //     setModelo(modo)
// //   }
// //   obtenerDatos()
// // },[id])


// //     return (
// //         <div>
// //           <h1>Autos</h1>
// //           {modelo.map((e)=>(
// //             <ItemDetail key={e.id} e={e}/>
        
// //         ))}

// //         </div>
// //     )
// }

// export default ItemDetailContainer;


// const {id} = useParams()
// console.log(id)

//     const [modelo, setDetails] = useState([])
//     useEffect(() => {
//         fetchDetails();
//     })

//     const fetchDetails=async()=>{
//         const response=await Axios('https://618023028bfae60017adf9c8.mockapi.io/lotuscars');
//         setDetails(response.data)
//     }

// {
//   modelo && modelo.map(modelo=>{
//     return(
//       <div key={modelo.id} style={{alignItems:'center',margin:'20px 60px'}}>
//       <h4>{modelo.modelo}</h4>
//       <img alt="photos" src={modelo.img}></img>
//     </div>
//     )

//   })
// }


///////////////////////////////////////////////////////////////
// const {data} = autos;

// const [coche, setCoche] = useState([]);

// useEffect (() => {
//     setTimeout (() =>{
//         setCoche([coche]);
//     }, 2000);
// },[]);

// {data.map ((e) => {
//     return <p key={e.id}> {e.description}</p>
// })}

//////////////////////////////////////////////////////////77

// useEffect(()=> {
//     fetchLotus();
// })

// const fetchLotus = () => {
//     return fetch(url)

// }

// const fetchData = () => {
//     return fetch(url)
//           .then((response) => response.json())
//           .then((data) => console.log(data));}