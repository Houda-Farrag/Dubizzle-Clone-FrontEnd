import { useEffect, useState } from "react"

const UseGetAllProducts = () => {

    const [products, setProducts] = useState([])

    async function getProducts() {
        await fetch("http://localhost:3000/products/get")
            .then((res) => {
                return res.json()
            })
            .then(({ products }) => {
                setProducts(products)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getProducts()
    },[])

    return {products}
}

export default UseGetAllProducts