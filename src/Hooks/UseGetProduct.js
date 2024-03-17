import { useEffect, useState } from "react";

const UseGetProduct = () => {
  const [product, setProduct] = useState(null);
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);

  async function getProduct() {
    try {
      const response = await fetch(`http://localhost:3000/products/get/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const { product } = await response.json();
      setProduct(product);
      setUserData(product?.sellerId);
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    if (id !== "") {
      getProduct();
    }
  }, [id , userData]);

  return { product, setId, userData };
};

export default UseGetProduct;
