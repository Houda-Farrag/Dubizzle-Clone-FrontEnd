import { useNavigate } from "react-router-dom";

const usePostProduct = () => {
  const navigate = useNavigate();

  const addProduct = async (product, selectedSubCategory) => {
    const token = localStorage.getItem("jwt");
    console.log(token, selectedSubCategory);
    try {
      const responseSubCate = await fetch(
        `http://localhost:3000/sub-category/${selectedSubCategory}`
      );

      if (!responseSubCate.ok) {
        throw new Error("Failed to fetch subcategory");
      }

      const resCat = await responseSubCate.json();
      product.subCategoryId = resCat.subCategoryId;

      const addProductResponse = await fetch(
        "http://localhost:3000/products/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(product),
        }
      );

      const addProductData = await addProductResponse.json();

      if (addProductData && addProductData.success === 1) {
        alert("Product Saved Successfully");
        navigate("/");
      } else {
        alert("There was an issue saving the product. Please try again.");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("An error occurred while saving the product.");
    }
  };

  return { addProduct };
};

export default usePostProduct;
