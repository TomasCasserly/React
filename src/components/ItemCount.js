import {useState, React} from 'react'

export const ItemCount = ({onClick, onAdd}) => {

    const [count, setCount] = useState(0);

    const add = () => {
        if (count >=5){
            return;
        } else{
        setCount(count + 1)
    }

    }
    const res = () => {
        if (count <=0){
            return;
        } else {
        setCount(count - 1)
    }
    }


    return (
        <>
        <div className="contador">
            <button className="btnCnt" onClick={res}>-</button>
            <p className="cont">{count}</p>
            <button className="btnCnt" onClick={add}>+</button>
        </div>
        <button className="agreg" onClick={ () => onClick (count)}>Me llevo este Lotus</button>
        </>
    )
}
