import { useEffect, useState } from "react";

const UseGetProduct = () => {
    const [product, setProduct] = useState(null); 
    const [id , setId] = useState(""); 

    async function getProduct() {
        try {
            const response = await fetch(`http://localhost:3000/products/get/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            const { product } = await response.json();
            setProduct(product);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (id !== "") {
            getProduct();
        }
    }, [id]);

    return { product, setId };
};

export default UseGetProduct;
