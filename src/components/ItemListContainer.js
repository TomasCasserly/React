import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../firebase";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [auto, setAuto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const collection = firestore.collection("autos");

    let promesa;

    if (id != null) {
      promesa = collection.where("idCategoria", "==", id).get();
    } else {
      promesa = collection.get();
    }

    promesa
      .then((resultado) => {
        const coches = [];

        resultado.docs.forEach((doc) => {
          const coche = { ...doc.data() };
          coche.id = doc.id;
          coches.push(coche);
        });

        setAuto(coches);
      })

      .catch(() => {
        console.log("Hubo un error");
      });
  });

  return (
    <div className="mainDisplay">
      <ItemList auto={auto} />
    </div>
  );
};

export default ItemListContainer;
