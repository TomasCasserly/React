import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){

  const resultado = useParams()
  console.log(resultado)

const [modelo, setModelo] = useState([]);
useEffect(()=>{
  obtenerDatos()
},[])


const obtenerDatos = async () => {
  const data = await fetch(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`)
  const modo = await data.json()
  setModelo(modo)
}

    return (
        <div>
          <h1>Autos</h1>
          {modelo.map((e)=>(
            <ItemDetail key={e.id} e={e}/>
        
        ))}

        </div>
    )
}

export default ItemDetailContainer;


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