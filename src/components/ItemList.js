const ItemList = () => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, 2000)

    })


        promesa.then(()=>{console.log("Good!")})
        promesa.catch(()=>{console.log("Try again")})
        

    
    
    return (
        <div>
            
        </div>
    )
}

export default ItemList
