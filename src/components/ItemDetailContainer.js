import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ItemDetailContainer(){

    const [modelo, setDetails] = useState([])
    useEffect(() => {
        fetchDetails();
    })

    const fetchDetails=async()=>{
        const response=await Axios('https://618023028bfae60017adf9c8.mockapi.io/lotuscars');
        setDetails(response.data)
    }


    return (
        <div>
          {
            modelo && modelo.map(modelo=>{
              return(
                <div key={modelo.id} style={{alignItems:'center',margin:'20px 60px'}}>
                <h4>{modelo.modelo}</h4>
                <img alt="pHotos" src={modelo.img}></img>
              </div>
              )
    
            })
          }
        </div>
    )
}

export default ItemDetailContainer;

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