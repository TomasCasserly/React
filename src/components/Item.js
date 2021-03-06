import { Link } from "react-router-dom";

export const Item = ({ carro }) => {
  return (
    <div className="items">
      <h3>
        {carro.marca} {carro.modelo}
      </h3>
      <Link to={`/modelo/${carro.id}`}>
        <img className="small" src={carro.img} alt={carro.modelo}></img>
      </Link>
      <Link to={`/modelo/${carro.id}`} className="linkMas">
        Más información...
      </Link>
    </div>
  );
};
