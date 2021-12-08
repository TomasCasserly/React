import React, { useEffect, useState } from "react";
import { firestore } from "../firebase";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  console.log(id);

  const [modelo, setModelo] = useState([]);

  useEffect(() => {
    const collection = firestore.collection("autos");

    const query = collection.doc(id);

    const promesa = query.get();

    promesa
      .then((documento) => {
        console.log("Consulta exitosa");
        const data = documento.data();
        setModelo(data);
      })
      .catch(() => {
        console.log("Hubo un error");
      });
  }, [id]);

  return (
    <div className="detailContainer">
      <ItemDetail key={modelo.id} modelo={modelo} />
    </div>
  );
}

export default ItemDetailContainer;