import autos from "./autos.json"


const GetItems = new Promise((res) => {
    setTimeout(() => {
        res(autos)
    }, 2000)

})

export default GetItems