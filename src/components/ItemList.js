import { Item } from "./Item";

const ItemList = ({ auto }) => {
  return (
    <div className="mainDisplay">
      {auto.map((carro) => (
        <Item key={carro.id} carro={carro} />
      ))}
    </div>
  );
};

export default ItemList;
