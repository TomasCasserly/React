import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  console.log(id);

  const [modelo, setModelo] = useState([]);

  useEffect(()=>{

    const db = firestore

    const collection = db.collection("autos")

    const query = collection.doc(id)

    const promesa = query.get()
    
    promesa
        .then((documento)=>{
            console.log("Consulta exitosa")
            const data = documento.data()
            setModelo(data)
        })
        .catch(()=>{
            console.log("Hubo un error")
        })


}, [id])

  return (
    <div>
      <ItemDetail key={modelo.id} modelo={modelo} />

    </div>
  );
}

export default ItemDetailContainer;



// useEffect(() => {
//   setTimeout(() => {
//     const fetchModelo = async () => {
//       const response = await Axios(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`);
//       setModelo(response.data);
//     };
//     fetchModelo();
//   }, 2000);
// }, []);

// // const filtro = modelo.filter(modelo=> modelo.id === id)