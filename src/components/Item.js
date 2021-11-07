export const Item = (props) => {

    const{carro} = props;

    return (
        <div>
            <h3>{carro.marca} {carro.modelo}</h3>
            <img className="small" src={carro.img} alt={carro.modelo}></img>
        </div>
    )
}
