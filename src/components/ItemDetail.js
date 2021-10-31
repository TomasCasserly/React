const ItemDetail = (props) => {

const {data} = props;

    return (
        <div>
            <p>{data.description}</p>
            
        </div>
    )
}

export default ItemDetail
