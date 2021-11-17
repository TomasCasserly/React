import React, { useEffect, useState } from "react";
import Axios from "axios";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { id } = useParams();
  console.log(id);

  const [modelo, setModelo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetchModelo = async () => {
        const response = await Axios(`https://618023028bfae60017adf9c8.mockapi.io/lotuscars/`);
        setModelo(response.data);
      };
      fetchModelo();
    }, 2000);
  }, []);

  // const filtro = modelo.filter(modelo=> modelo.id === id)

  return (
    <div>
      {modelo.map((modelo) => {
        return <ItemDetail key={modelo.id} modelo={modelo} />;
      })}
    </div>
  );
}

export default ItemDetailContainer;
